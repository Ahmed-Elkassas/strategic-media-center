"use client";

import {Breadcrumb, Image} from "antd";
import {Link} from "@/i18n/routing";
import {useTranslations} from "next-intl";
import PageWrapper from "../PageWrapper";


interface ExpertDetailsProps {
    breadcrumbItems: {title: string; href?: string}[];
    actions: {label: string; href: string; danger?: boolean}[]
    expertData: {
        name: string;
        shortBio?: string;
        currentPosition?: string;
        previousPositions?: string[];
        keyWorkExperience?: string[];
        mainTrainingCourses?: string[];
        academicQualifications?: string[];
        researchStudies?: string[];
        imageSrc?: string;
    };
}

export default function ExpertDetails({breadcrumbItems, actions, expertData}: ExpertDetailsProps) {
    const tExpert = useTranslations("common.expertDetails");

    const {
        name,
        shortBio = "",
        currentPosition = "",
        previousPositions = [],
        keyWorkExperience = [],
        mainTrainingCourses = [],
        academicQualifications = [],
        researchStudies = [],
        imageSrc,
    } = expertData;

    return (
        <PageWrapper sidebarContent={undefined} sidebarTitle={undefined}>
            {/* Breadcrumb */}
            <Breadcrumb
                items={breadcrumbItems.map((item) => ({
                    title: item.href ? (
                        <Link
                            href={item.href}
                            className="hover:!bg-transparent hover:underline"
                        >
                            {item.title}
                        </Link>
                    ) : (
                        item.title
                    ),
                }))}
                separator=">"
                className="mb-4 text-gray-600 text-lg font-bold"
            />

            {/* Page Content */}
            <div className="mx-auto max-w-5xl p-6 bg-gray-100 rounded-lg shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Expert Details */}
                    <div className="col-span-2">
                        <ul className="list-disc ps-6 space-y-2 text-gray-700 font-medium">
                            <li>
                                <strong>{tExpert("name")}: </strong> {name}
                            </li>
                            {shortBio && (
                                <li>
                                    <strong>{tExpert("shortBio")}: </strong> {shortBio}
                                </li>
                            )}
                            {currentPosition && (
                                <li>
                                    <strong>{tExpert("currentPosition")}: </strong>{" "}
                                    {currentPosition}
                                </li>
                            )}
                            {previousPositions?.length > 0 && (
                                <li>
                                    <strong>{tExpert("previousPositions")}: </strong>
                                    <ul className="list-disc ps-6">
                                        {previousPositions.map((position, index) => (
                                            <li key={index}>{position}</li>
                                        ))}
                                    </ul>
                                </li>
                            )}
                            {keyWorkExperience?.length > 0 && (
                                <li>
                                    <strong>{tExpert("keyWorkExperience")}: </strong>
                                    <ul className="list-disc ps-6">
                                        {keyWorkExperience?.map((experience, index) => (
                                            <li key={index}>{experience}</li>
                                        ))}
                                    </ul>
                                </li>
                            )}
                            {mainTrainingCourses?.length > 0 && (
                                <li>
                                    <strong>{tExpert("mainTrainingCourses")}: </strong>
                                    <ul className="list-disc ps-6">
                                        {mainTrainingCourses?.map((course, index) => (
                                            <li key={index}>{course}</li>
                                        ))}
                                    </ul>
                                </li>
                            )}
                            {academicQualifications?.length > 0 && (
                                <li>
                                    <strong>{tExpert("academicQualifications")}: </strong>
                                    <ul className="list-disc ps-6">
                                        {expertData.academicQualifications?.map(
                                            (qualification, index) => (
                                                <li key={index}>{qualification}</li>
                                            )
                                        )}
                                    </ul>
                                </li>
                            )}
                            {researchStudies?.length > 0 ? (
                                <li>
                                    <strong>{tExpert("researchStudies")}: </strong>
                                    <ul className="list-disc ps-6">
                                        {expertData.researchStudies?.map((study, index) => (
                                            <li key={index}>{study}</li>
                                        ))}
                                    </ul>
                                </li>
                            ) : null}
                        </ul>
                    </div>

                    {/* Expert Image */}
                    <div className="col-span-1 flex justify-center">
                        <Image
                            src={imageSrc || "https://placehold.co/350x250"}
                            alt={name}
                            width={350}
                            height={250}
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-center items-center gap-4 mt-6">
                    {actions.map((action, index) => (
                        <Link
                            key={index}
                            href={action.href}
                            className={`underline underline-offset-4 hover:underline-offset-2 ${
                                action.danger ? "text-red-600" : ""
                            }`}
                        >
                            {action.label}
                        </Link>
                    ))}
                </div>
            </div>
        </PageWrapper>
    );
}
