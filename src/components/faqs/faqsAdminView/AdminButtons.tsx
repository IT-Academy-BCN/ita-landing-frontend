import plusIcon from "../../../assets/img/plus.svg"
import userIcon from "../../../assets/img/user.svg"

export const AdminButtons = () => {
  return (
    <>
        <div className="flex justify-end align-center mr-6 mb-2 gap-2 bg-backOffice-main">
            <a className="flex place-content-center w-12 h-10 rounded-lg bg-white">
                <img src={plusIcon} alt="plusIcon" className="w-5" />
            </a>
            <a className="flex place-content-center w-12 h-10 rounded-lg bg-white">
                <img src={userIcon} alt="userIcon" className="w-8" />
            </a>
        </div>
    </>
  )
}
