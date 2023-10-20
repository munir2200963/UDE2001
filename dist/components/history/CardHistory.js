import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Card from "../card/Card";
import { smallCardStyles } from "../card/Card.css";
import { cardContainerScrollStyles, cardContainerStyles, historyStyles, historyTitleStyles, } from "./CardHistory.css";
const CardHistory = ({ cardHistory }) => {
    return (_jsxs("div", { className: historyStyles, children: [_jsx("div", { className: historyTitleStyles, children: "previous cards" }), _jsx("div", { className: cardContainerStyles, children: _jsx("div", { className: cardContainerScrollStyles, children: cardHistory.map((qn) => (_jsx(Card, { styleName: smallCardStyles, question: qn }, qn))) }) })] }));
};
export default CardHistory;
