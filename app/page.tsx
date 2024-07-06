
import PassKeyModal from "@/components/elements/PassKeyModal";
import  PatientForm  from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home({searchParams}: SearchParamProps) {
  const year = new Date().getFullYear();
  const isAdmin = searchParams.admin === "true";
  return (
    <main className="flex h-screen max-h-screen">
      {isAdmin && <PassKeyModal />}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[469px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit pointer-events-none"
          />
          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between ">
            <p>
              © {year}{" "}
              <Link
                href={"https://github.com/StarDust130"}
                target="_blank"
                className="justify-items-end text-yellow-300 hover:text-yellow-500 xl:text-left"
              >
                StarDust🌟
              </Link>{" "}
            </p>
            <Link href={"/?admin=true"} className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        alt="patient"
        width={1000}
        height={1000}
        className="side-img max-w-[50%] pointer-events-none"
      />
    </main>
  );
}

