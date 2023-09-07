type ReviewProps = {
    name: string;
    text: string;
    stars: number;
}

const Review: React.FC<ReviewProps> = ({name, text, stars}) => {
    const renderStars: React.ReactNode[] = [];

    // render as many star divs as stars review got
    for(let i = 0; i < stars; i++) {
        renderStars.push(<div style={{color: 'goldenrod'}}>*</div>)
    }

    return <div>
        <div style={{display: 'flex'}}>
            <h3 style={{marginBottom: 4, marginRight: 4}}>{name}</h3>
            {renderStars}
        </div>
        <p>{text}</p>
    </div>
}

export default Review;