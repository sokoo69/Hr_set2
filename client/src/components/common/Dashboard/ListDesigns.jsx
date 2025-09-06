import { EmployeeDetailsDialogBox } from "./dialogboxes.jsx"
import { DeleteEmployeeDialogBox } from "./dialogboxes.jsx"
import { RemoveEmployeeFromDepartmentDialogBox } from "./dialogboxes.jsx"

export const ListWrapper = ({ children }) => {
    return (
        <div className={`wrapper-container p-2 border-2 border-blue-700 rounded-lg w-auto`}>
            {children}
        </div>
    )
}

export const HeadingBar = ({ table_layout, table_headings }) => {
    return (
        <div className={`heading-container grid min-[250px]:grid-cols-2 sm:${table_layout ? table_layout : `grid-cols-5`} rounded-lg gap-4 overflow-auto`}>
            {
                table_headings.map((item) => <div className={`heading-content text-white bg-blue-800 font-bold min-[250px]:text-xs xl:text-xl min-[250px]:p-1 sm:p-2 rounded-lg text-center flex justify-center items-center 
                ${(["Email", "Department", "Contact Number"].includes(item)) ? `min-[250px]:hidden sm:flex` : ""}`}>
                    {item}
                </div>)
            }
        </div>
    )
}

export const ListContainer = ({ children }) => {
    return (
        <div className={`list-item-container px-2 py-2 border-2 border-blue-700 rounded-lg w-auto`}>
            {children}
        </div>
    )
}

export const ListItems = ({ TargetedState }) => {
    // Add null checks to prevent undefined errors
    if (!TargetedState || !TargetedState.data || !Array.isArray(TargetedState.data)) {
        return (
            <div className="flex items-center justify-center h-32 text-muted-foreground">
                <p>No data available</p>
            </div>
        )
    }

    return (
        <>
            {TargetedState.data.map((item, index) => (
                <div key={index} className={`list-item-container grid min-[250px]:grid-cols-2 sm:grid-cols-5 py-1 gap-2 justify-center items-center border-b-2 border-blue-800`}>
                    <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-start overflow-hidden text-ellipsis">
                        {`${item.firstname || ''} ${item.lastname || ''}`}
                    </div>
                    <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs xl:text-lg p-2 rounded-lg text-start overflow-hidden text-ellipsis min-[250px]:hidden sm:block">
                        {item.email || 'N/A'}
                    </div>
                    <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis min-[250px]:hidden sm:block">
                        {item.department ? item.department.name : "Not Specified"}
                    </div>
                    <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm  xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis min-[250px]:hidden sm:block">
                        {item.contactnumber || 'N/A'}
                    </div>
                    <div className="heading-content text-blue-800 font-bold min-[250px]:text-xs xl:text-lg p-2 rounded-lg text-center flex justify-center items-center min-[250px]:gap-1 xl:gap-2">
                        {/* <button className="btn-sm btn-blue-700 text-md border-2 border-blue-800 px-2 py-1 rounded-md hover:bg-blue-800 hover:text-white">View</button> */}
                        <EmployeeDetailsDialogBox EmployeeID={item._id} />
                        <DeleteEmployeeDialogBox EmployeeID={item._id} />
                    </div>
                </div>
            ))}
        </>
    )
}


export const DepartmentListItems = ({ TargetedState }) => {
    console.log("this is targeted state", TargetedState)
    
    // Add null checks to prevent undefined errors
    if (!TargetedState || !TargetedState.employees || !Array.isArray(TargetedState.employees)) {
        return (
            <div className="flex items-center justify-center h-32 text-muted-foreground">
                <p>No employees in this department</p>
            </div>
        )
    }
    
    return (
        <>
            {TargetedState.employees.map((item, index) => (
                <div key={index} className={`list-item-container grid min-[250px]:grid-cols-2 sm:grid-cols-4 py-1 gap-2 justify-center items-center border-b-2 border-blue-800`}>
                    <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis">
                        {`${item.firstname || ''} ${item.lastname || ''}`}
                    </div>
                    <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis min-[250px]:hidden sm:block">
                        {item.email || 'N/A'}
                    </div>
                    <div className="heading-content font-bold min-[250px]:text-sm sm:text-xs lg:text-sm  xl:text-lg p-2 rounded-lg text-center overflow-hidden text-ellipsis min-[250px]:hidden sm:block">
                        {item.contactnumber || 'N/A'}
                    </div>
                    <div className="heading-content text-blue-800 font-bold min-[250px]:text-xs xl:text-lg p-2 rounded-lg text-center flex justify-center items-center min-[250px]:gap-1 xl:gap-2">
                        <RemoveEmployeeFromDepartmentDialogBox DepartmentName={TargetedState.name} DepartmentID={TargetedState._id} EmployeeID={item._id}/>
                    </div>
                </div>
            ))}
        </>
    )
}