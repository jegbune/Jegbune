import Link from "next/link";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const SocialList = () => (
  <div className='flex items-center gap-4'>
    <Link href='https://github.com/jegbune' target='_blank'><AiFillGithub className='text-3xl text-green-600 rounded-full' /></Link>
    <Link href='https://www.linkedin.com/in/jeremiah-ikechukwu-egbune-98b0a1178/' target='_blank'><AiFillLinkedin className='text-3xl text-green-600 rounded-full' /></Link>
    <Link href='https://www.facebook.com/jeremiah.egbune' target='_blank'><AiFillFacebook className='text-3xl text-green-600 rounded-full' /></Link>
  </div>
)

export default SocialList