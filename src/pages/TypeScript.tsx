import Header from "../Components/Header/Header";
import Navigation from "../Components/Header/Navigation";
import '../CSS/Page.css'
// import DynamicNotes from "../components/Notes/DynamicNotes";
// import items from "../components/Notes/HTMLNotes";
export default function typescript() {

    return (

        <>
            <Header text="TypeScript" />
            <Navigation />
            {/* <DynamicNotes items={items} /> */}
            {/* <DynamicNotesCode items={itemsWithCode} /> */}
        </>
    );

}
