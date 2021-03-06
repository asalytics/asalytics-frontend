import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { SentimentLineChart } from "src/components/SentimentLineChart";
import { SummaryBarChart } from "src/components/SummaryBarChart";
import { useTwitterAnalyticsQuery } from "src/generated/graphql";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { TwitterAnalysisSummary } from "src/sections/TwitterAnalysisSummary";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import { useStore } from "src/store";
import styles from "../../../styles/dashboard.module.scss";

const Home: NextPage = () => {
    const { asaId } = useStore();
    const { status, data, error, isFetching } = useTwitterAnalyticsQuery({ asaID: asaId, startDate: "2020-01-01" });
    let likeAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            data.twitterAnalytics?.results?.forEach((item) => {
                likeAnalytics.push({
                    data: item.likes,
                    name: new Date(item.postedAt)?.toLocaleDateString(),
                });
            });
            console.log(data);
        }
    }, [data]);
    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <TwitterSubLinks />
                <div className={styles.sentimentChartContainer}>
                    <SentimentLineChart title="Likes (Past 15 days)" data={likeAnalytics} />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
