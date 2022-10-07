import LinkButton from "./LinkButton";

const Article = () => {
    return(
        <div className="button flex flex-row h-[85px] bg-backgroundAlt rounded-lg mt-5 mb-5 p-4">
            <h1 className="m-auto mr-6 text-center">Article Name</h1>
            <div className="felx flex-grow"></div>
            <LinkButton className="m-auto" type={'medium'}/>
        </div>
    )
}

export default Article;