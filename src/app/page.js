import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* link of checkout */}

      <div>
        <h1>checkout page link is down here</h1>

        <Link href={"/checkout"} className="text-blue-700 underline">
          checkout page
        </Link>
      </div>
    </>
  );
}
