"use client";

import {useTranslations} from "next-intl";

import ExpertDetails from "@/components/shared/ExpertDetails";
import {withAuth} from "@/components/withAuth";
import {useGet} from "@/hooks/useGet";
import PageWrapper from "@/components/PageWrapper";
import {Spin} from "antd";
import {notFound} from "next/navigation";

interface Expert {
    id: string;
    name: string;
    about: string;
    specialization: string;
    job: string;
    practical_experiences: string;
    academic_qualifications: string;
    training_courses: string;
    research: string;
    nationality: string;
    resident_country: string;
    phone: string;
    email: string;
}

 function LecturesExpertDetails({id}: {id: string}) {
    const tBreadcrumb = useTranslations("common.breadcrumb");
    const tExpert = useTranslations("common.expertDetails");
    const tLectures = useTranslations("lectures.expertDetails")

     const { data, error, isPending } = useGet<Expert>({
         endpoint: `/user/v1/experts/${id}`,

     })
     if (isPending) {
         return (
             <PageWrapper sidebarTitle={undefined} sidebarContent={undefined}>
                 <div className="flex justify-center my-4">
                     <Spin size="large" />
                 </div>
             </PageWrapper>
         );
     }

     // Handle error state
     if (error) {
         return (
             <PageWrapper sidebarTitle={undefined} sidebarContent={undefined}>
                 <div className="flex justify-center my-4">
                     <p>خطأ: {error.message}</p>
                 </div>
             </PageWrapper>
         );
     }

     // Check if data exists
     if (!data || !data.response || !data.response.data) {
         notFound();
     }

     const item = data.response.data;

    // Breadcrumb items
    const breadcrumbItems = [
        {
            title: tBreadcrumb("lectures.title"),
            href: "/lectures",
        },
        {
            title: tExpert("title"),
        },
    ];

    // Actions (buttons/links at the bottom)
    const actions = [
        {
            label: tLectures("subscribeToRemoteCourse"),
            href: "/lectures/online-course-subscription",
        },
        {
            label: tLectures("subscribeToPrivateCourse"),
            href: "/lectures/private-course-request",
        },
        // {
        //     label: tLectures("cancelSubscription"),
        //     href: "/lectures",
        //     danger: true, // Will add a red color to the action
        // },
    ];

     const expertData = {
         name: item?.name,
         shortBio: item?.about,
         currentPosition: item?.job,
         // previousPositions: ["وظيفة سابقة 1", "وظيفة سابقة 2", "وظيفة سابقة 3"],
         keyWorkExperience: item?.practical_experiences,
         mainTrainingCourses: item?.training_courses,
         academicQualifications: item?.academic_qualifications,
         researchStudies: item?.research,
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

export default  withAuth(LecturesExpertDetails);