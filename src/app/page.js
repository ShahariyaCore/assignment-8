import Image from "next/image";
import Banner from "@/components/Banner";
import PopularCourses from "@/components/PopularCourses";
import LearningTips from "@/components/LearningTips";
import TopInstructors from "@/components/TopInstructors";

export default function Home() {
  return (
    <div>
    <Banner />
    <PopularCourses />
    <LearningTips />
    <TopInstructors />
    </div>
  );
}