import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[469px]">
          <Image
            src="/assets/icons/logo-full.svg"
            alt="patient"
            width={1000}
            height={1000}
            className="mb-12 h-10 w-fit"
          />
          <PatientForm />
        </div>
      </section>
    </main>
  );
}
