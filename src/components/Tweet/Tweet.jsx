import React from 'react'
import classes from './Tweet.module.scss'
import ProfilePhoto from '../../assets/pp.png'
import Comment from '../../assets/comment.png'
import Like from '../../assets/like.png'

function Tweet() {
    const [likeCount, setLikeCount] = React.useState(0)
    const [isLiked, setIsLiked] = React.useState(false)

    let imgLikeClass = classes.Image + ' ';

    const likeButton = () => {
        if (isLiked) {
            setLikeCount(prev => prev - 1)
            setIsLiked(false)
            imgLikeClass = classes.Image + ' ';
        } else {
            setLikeCount(prev => prev + 1)
            setIsLiked(true)
            imgLikeClass += classes.ToggledImage
        }
    }


    React.useEffect(() => {
        console.log('render');
    }, [likeButton])

  return (
        <div className={classes.Tweet}>
            <div className={classes.Logo}>
                <img src={ProfilePhoto} alt="profile_photo" />
            </div>
            <div className={classes.Content}>
                <div className={classes.Body}>
                    <div className={classes.FullName}>
                        <div className={classes.Nick}>Elon Musk</div>
                        <div className={classes.Tag}>@elonmusk</div>
                    </div>
                    <div className={classes.Text}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima eos officia, deserunt dolore vel itaque incidunt corrupti voluptas nesciunt cupiditate. Quaerat ullam nam amet possimus blanditiis itaque sequi hic obcaecati!
                    </div>
                </div>
                <div className={classes.Actions}>
                    <div className={classes.Comment}>
                        <div className={classes.Image}>
                            <img src={Comment} alt="comment" />
                        </div>
                        <div className={classes.Count}>45</div>
                    </div>
                    <div className={classes.Like}>
                        
                        <div onClick={() => likeButton()} className={imgLikeClass}>
                            <img src={Like} alt="Like" />
                        </div>
                        <div className={classes.Count}>{likeCount}</div>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default Tweet