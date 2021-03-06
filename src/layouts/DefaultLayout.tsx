import styles from "../../styles/Home.module.scss";
import { HomePageFooter } from "src/sections/HomePageFooter";
import { HomePageHeader } from "src/sections/HomePageHeader";
import { AnalyzeAsaModal } from "src/sections/AnalyzeAsaModal";
import { useStore } from "src/store";

type Type = {
    children: any;
};
export function DefaultLayout({ children }: Type) {
    const { analyzeModal, openAnalyzeModal } = useStore();
    return (
        <div>
            {analyzeModal ? <AnalyzeAsaModal closePopup={openAnalyzeModal} /> : null}
            {children}
        </div>
    );
}
