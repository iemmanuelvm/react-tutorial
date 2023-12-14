export const EventsButton = () => {

    const handleClick = () => {
        console.log("onClick was pushed");
    }



    return (
        <>
            <button onClick={handleClick}>
                Clic
            </button>
        </>
    )
}
