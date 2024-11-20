"use client";

import {useTranslations} from "next-intl";

import ExpertDetails from "@/components/shared/ExpertDetails";

export default function CoursesExpertDetails() {
    const tBreadcrumb = useTranslations("common.breadcrumb");
    const tExpert = useTranslations("common.expertDetails");
    const tTraining  = useTranslations("training.expertDetails")
    // Breadcrumb items
    const breadcrumbItems = [
        {
            title: tBreadcrumb("training.title"),
            href: "/training",
        },
        {
            title: tExpert("title"),
        },
    ];

    // Actions (buttons/links at the bottom)
    const actions = [
        {
            label: tTraining("subscribeToRemoteCourse"),
            href: "/training/courses/online-course-subscription",
        },
        {
            label: tTraining("subscribeToPrivateCourse"),
            href: "/training/courses/private-course-request",
        },
        {
            label: tTraining("cancelSubscription"),
            href: "/training/courses",
            danger: true, // Will add a red color to the action
        },
    ];

    // Example expert data (replace with actual API data or props)
    const expertData = {
        name: "عمرو عبدالهادي",
        shortBio: "نبذة تعريفية مختصرة.",
        currentPosition: "الوظيفة الحالية",
        previousPositions: ["وظيفة سابقة 1", "وظيفة سابقة 2", "وظيفة سابقة 3"],
        keyWorkExperience: ["خبرة عملية 1", "خبرة عملية 2"],
        mainTrainingCourses: ["دورة تدريبية 1", "دورة تدريبية 2"],
        academicQualifications: ["مؤهل أكاديمي 1", "مؤهل أكاديمي 2"],
        researchStudies: ["بحث 1", "بحث 2"],
        imageSrc: "https://placehold.co/350x250",
    };

    return (
        <ExpertDetails
            breadcrumbItems={breadcrumbItems}
            actions={actions}
            expertData={expertData}
        />
    );
}
