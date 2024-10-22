import { Button } from "@/components/ui/button";
import Link from "next/link";

const CoursesPage = () => {
  return (
    <div className="p-6">
      <Link href="/teacher/create">
        <Button className="bg-rose-500 hover:bg-rose-700">New Course</Button>
      </Link>
    </div>
  );
};

export default CoursesPage;
