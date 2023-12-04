const DiaryItem = ({author, content, created_date, emotion, id}) => {
    return <div className="DiaryItem">
        <div className="info" >
            <span>작성자 : {author} | 감정 : {emotion}</span>
            <br/>
            <span className="date">
                {new Date(created_date).toLocaleString()}
            </span>
        </div>
        <div>일기 : {content}</div>
    </div>
};

export default DiaryItem;