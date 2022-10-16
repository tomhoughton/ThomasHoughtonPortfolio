import LinkButton from "./LinkButton";

const Article = ({title, link}) => {
    return(
        <div className="button flex flex-row h-auto bg-backgroundAlt rounded-lg mt-5 mb-5 p-4">
            <h1 className="m-auto mr-6 lg:text-xl m:text-xs text-center">{title}</h1>
            <div className="felx flex-grow"></div>
            <LinkButton className="m-auto" type={'medium'} link={link}/>
        </div>
    )
}

export default Article;