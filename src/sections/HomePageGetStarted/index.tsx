import Image from "next/image";
import Link from "next/link";
import { HowToGetStarted } from "src/components/HowToGetStarted";
import { useStore } from "src/store";
import { PrimaryButton } from "../../components/PrimaryButton";
import styles from "./style.module.scss";

export function HomePageGetStarted() {
    const { openAnalyzeModal } = useStore();
    return (
        <div className={styles.getStartedContainer}>
            <div className={styles.leftContainer}>
                <h1 className={styles.heading}>How To Get Started</h1>
                <p className={styles.paragraph}>Simple and easy way to analyze your favorite Algorand Asset.</p>
                <PrimaryButton type="button" text="ANALYZE ASAs" onClick={openAnalyzeModal} />
            </div>
            <div className={styles.rightContainer}>
                <HowToGetStarted
                    title="Create Your Account"
                    text="Your account and personal identity are guaranteed safe."
                    icon={<Image height={80} width={80} src="/images/account.svg" />}
                />
                <HowToGetStarted
                    title="Analyze ASA based on Social Sentiments"
                    text="Analyze your assets across multiple social medias."
                    icon={<Image height={80} width={80} src="/images/analyze.svg" />}
                />
                <HowToGetStarted
                    title="Save or Export Review"
                    text="Save or export your ASA review and access it seamlessly."
                    icon={<Image height={80} width={80} src="/images/save.svg" />}
                />
            </div>
        </div>
    );
}
