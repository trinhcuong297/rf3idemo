/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import type { NextApiRequest, NextApiResponse } from 'next';

const contact = async (request: NextApiRequest, response: NextApiResponse) => {
  const { name, email, phone, company, message } = request.body;

  const dateTimeZone = new Date();
  // Update Time Zone
  if (process.env.NODE_ENV !== 'development') {
    dateTimeZone.setHours(dateTimeZone.getHours() + 7);
  }

  const date = format(dateTimeZone, "dd' / 'MMMM' / 'yyyy', 'HH:mm", {
    locale: pt,
  });

  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

  await doc.useServiceAccountAuth({
    client_email: `${process.env.GOOGLE_API_CLIENT_EMAIL}`,
    private_key: `${process.env.GOOGLE_API_PRIVATE_KEY?.replace(/\\n/g, '\n')}`,
  });
  await doc.loadInfo();

  const sheet = doc.sheetsByIndex[0];
  await sheet?.addRow({
    name,
    email,
    phone,
    company,
    message,
    date,
  });

  response.status(200).json({ ok: true });
};

export default contact;
