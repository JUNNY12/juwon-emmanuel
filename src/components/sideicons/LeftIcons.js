import {AiOutlineGithub, AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from "react-icons/ai"

const LeftIcons = () => {
  return (
    <div className="hidden xmd:block xmd:fixed xmd:top-1/2 xmd:left-0 px-8 cursor-pointer"> 
        <div className="text-3xl text-gray-700">
            <div className="py-4"><AiOutlineGithub /></div>
            <div className="py-4"> <AiFillTwitterCircle /></div>
            <div className="py-4"> <AiFillInstagram /></div>
            <div className="py-4"> <AiFillLinkedin /></div>
        </div>
    </div>
  )
}

export default LeftIcons