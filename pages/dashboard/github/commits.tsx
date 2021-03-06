import type { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";
import { SentimentBarChart } from "src/components/SentimentBarChart";
import { SentimentLineChart } from "src/components/SentimentLineChart";
import { SummaryBarChart } from "src/components/SummaryBarChart";
import { useGithubAnalyticsPerTimeQuery } from "src/generated/graphql";
import { DashboardLayout } from "src/layouts/DashboardLayout";
import { GithubSubLinks } from "src/sections/GithubSubLinks";
import { TwitterAnalysisSummary } from "src/sections/TwitterAnalysisSummary";
import { TwitterSubLinks } from "src/sections/TwitterSubLinks";
import { useStore } from "src/store";
import styles from "../../../styles/dashboard.module.scss";

const Home: NextPage = () => {
    const { asaId } = useStore();
    const { status, data, error, isFetching } = useGithubAnalyticsPerTimeQuery({
        asaID: asaId,
        startDate: "2020-01-01",
    });
    let commitAnalytics = [] as Array<any>;

    useEffect(() => {
        if (data) {
            data.githubAnalyticsPertime?.repo?.forEach((item) => {
                commitAnalytics.push({
                    data: item.commits,
                    name: new Date(item.lastPushDate)?.toLocaleDateString(),
                });
            });
            console.log(data);
        }
    }, [data]);
    return (
        <DashboardLayout>
            <div className={styles.dashboardContainer}>
                <GithubSubLinks />
                <div className={styles.sentimentChartContainer}>
                    <SentimentBarChart title="Commits (Past 15 days)" data={commitAnalytics} />
                </div>
            </div>
        </DashboardLayout>
    );
};

export default Home;
