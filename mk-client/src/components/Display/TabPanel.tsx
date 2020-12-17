import * as React from "react";
import { Box } from "@material-ui/core";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    activeIndex: number;
}
const TabPanel: React.FC<TabPanelProps> = (props: TabPanelProps) => {
    const { children, activeIndex, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={activeIndex !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
        >
            {activeIndex === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default TabPanel;