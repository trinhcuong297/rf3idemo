import Link from 'next/link';
import { useRouter } from 'next/router';

export default function FourZeroFour() {
  const router = useRouter();
  return (
    <>
      <div className="flex items-center justify-center w-full bg-gray-100">
        <Link href={'/'}>
          <img
            src={`${router.basePath}/assets/images/404.png`}
            className="h-[72] py-2"
          />
        </Link>
      </div>
    </>
  );
}
