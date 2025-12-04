import React from "react";

import program1 from "../../../assets/Image/program1.png";
import program2 from "../../../assets/Image/program2.png";
import program3 from "../../../assets/Image/program3.png";
import program4 from "../../../assets/Image/program4.png";
import program5 from "../../../assets/Image/program5.png";
import program6 from "../../../assets/Image/program6.png";


const OurProgramsData = [
  {
    id: 1,
    imageUrl: program1,
    rating: 4.9,
    level: "Beginner",
    title: "General English - Foundation",
    description:
      "Build a strong foundation with essential grammar, vocabulary, and conversational skills. Perfect for absolute beginners.",
    duration: "12 weeks • 3 hours/week",
    maxStudents: "Max 12 students per class",
    price: 299,
    type: "course",
  },
  {
    id: 2,
    imageUrl: program2,
    rating: 5.0,
    level: "Intermediate",
    title: "Business English Professional",
    description:
      "Master workplace communication, presentations, and professional correspondence for career advancement.",
    duration: "10 weeks • 4 hours/week",
    maxStudents: "Max 10 students per class",
    price: 449,
    type: "course",
  },
  {
    id: 3,
    imageUrl: program3,
    rating: 4.8,
    level: "Advanced",
    title: "IELTS Preparation Intensive",
    description:
      "Comprehensive preparation for all IELTS sections with proven strategies and practice tests to achieve your target score.",
    duration: "8 weeks • 6 hours/week",
    maxStudents: "Max 8 students per class",
    price: 599,
    type: "course",
  },
  {
    id: 4,
    imageUrl: program4,
    rating: 4.9,
    level: "Advanced",
    title: "TOEFL Success Program",
    description:
      "Master the TOEFL iBT with expert guidance, practice tests, and personalized feedback to maximize your score.",
    duration: "8 weeks • 5 hours/week",
    maxStudents: "Max 10 students per class",
    price: 579,
    type: "course",
  },
  {
    id: 5,
    imageUrl: program5,
    rating: 5.0,
    level: "All Levels",
    title: "Conversation Club",
    description:
      "Practice real-world conversations in a supportive environment. Build confidence and fluency through engaging discussions.",
    duration: "Ongoing • 2 hours/week",
    maxStudents: "Max 15 students per session",
    price: 99,
    type: "course",
  },
  {
    id: 6,
    imageUrl: program6,
    rating: 5.0,
    level: "Customized",
    title: "Private Tutoring",
    description:
      "Personalized one-on-one lessons tailored to your specific needs, schedule, and learning pace for maximum progress.",
    duration: "Flexible schedule",
    maxStudents: "1-on-1 personalized attention",
    price: 60,
    type: "course",
  },
];
export default OurProgramsData;
