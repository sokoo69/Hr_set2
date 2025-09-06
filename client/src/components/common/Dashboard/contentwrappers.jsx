import { KeyDetailsBox } from "./keydetailboxes"
import { Link } from "react-router-dom"

export const ContentWraperMain = ({ children }) => {
    return (
        <div className="container h-full w-auto flex flex-col">
            {children ? children : null}
        </div>
    )
}

export const KeyDetailBoxContentWrapper = ({ imagedataarray, data }) => {
    return (
        <div className="key-details-box-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 my-6">
            {imagedataarray.map((item, index) => (
                <Link key={index} to={item.path} className="block">
                    <KeyDetailsBox 
                        image={item.image} 
                        dataname={item.dataname} 
                        data={data ? data[item["dataname"]] : "0"}
                    />
                </Link>
            ))}
        </div>
    )
}
