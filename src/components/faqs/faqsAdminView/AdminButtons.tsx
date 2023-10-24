import plusIcon from "../../../assets/img/plus.svg"
import userIcon from "../../../assets/img/user.svg"

export const AdminButtons = () => {
  return (
    <>
        <div className="flex w-full justify-end items-center lg:bg-backOffice-main py-2">
            <a className="flex place-content-center mr-1 w-12 h-10 rounded-lg bg-white">
                <img src={plusIcon} alt="plusIcon" className="w-5" />
            </a>
            <a className="flex place-content-center ml-1 w-12 h-10 rounded-lg bg-white">
                <img src={userIcon} alt="userIcon" className="w-8" />
            </a>
        </div>
    </>
  )
}
