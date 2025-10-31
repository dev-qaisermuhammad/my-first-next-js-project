import SignUpForm from '@/components/form/SignUpForm';

const page = () => {
  return (
    <div
      className="
        flex flex-col items-center justify-center 
        min-h-screen w-full
        p-4 sm:p-6
      "
    >
      <div className="w-full max-w-md">
        <SignUpForm />
      </div>
    </div>
  );
};

export default page;
