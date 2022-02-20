//create a function homepage

import Productos from "./productos";
import SwipeableTextMobileStepper from "../components/SwipeableTextMobileStepper";
export default function HomePage() {
    return (
        <div>
            <SwipeableTextMobileStepper />
            <Productos/>

        </div>
    );
}       
/* react-swipeable-views-utils
react-swipeable-views */