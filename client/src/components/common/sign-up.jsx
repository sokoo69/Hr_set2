import { ErrorPopup } from "./error-popup"
import { useSelector } from "react-redux"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"


export const SignUP = ({ handlesignupform, handlesubmitform, stateformdata, errorpopup }) => {
    const employeestate = useSelector((state) => state.HRReducer)
    return (
        <>
            {employeestate.error.status ? <ErrorPopup error={employeestate.error.message} /> : null}
            {errorpopup ? <ErrorPopup error={"Password does not match, Please try again"} /> : null}
            <div className="HR-form-content justify-center items-center min-[250px]:w-[90%] 2xl:w-[80%] grid grid-cols-1 min-[900px]:grid-cols-2 mx-auto gap-8">

                <div className="form-img mx-auto flex justify-center items-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
                        <div className="text-center text-white">
                            <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold">Join Our Team</h3>
                            <p className="text-sm opacity-90">Create your HR account</p>
                        </div>
                    </div>
                </div>

                {/* <div className="form-content flex flex-col gap-6 sm:justify-center min-[250px]:items-center sm:items-center md:items-start md:justify-normal">

                        <div className="form-heading my-3">
                            <h1 className="text-4xl text-purple-700 font-bold">Sign UP HR</h1>
                        </div>

                        <div className="form-content flex gap-8 min-[250px]:flex-col sm:flex-row">

                            <div className="form-section-first min-[250px]:w-[80vw] sm:w-[30vw] md:w-[20vw] flex flex-col gap-5 sm:text-sm lg:text-md xl:text-lg">

                                <div className="form-field">
                                    <label htmlFor="firstname" className="block font-medium text-gray-900">
                                        First Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="firstname"
                                            name="firstname"
                                            type="text"
                                            required
                                            autoComplete="text"
                                            value={stateformdata.firstname}
                                            onChange={handlesignupform}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2"
                                        />
                                    </div>
                                </div>

                                <div className="form-field">
                                    <label htmlFor="lastname" className="block font-medium text-gray-900">
                                        Last Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="lastname"
                                            name="lastname"
                                            type="text"
                                            required
                                            autoComplete="text"
                                            value={stateformdata.lastname}
                                            onChange={handlesignupform}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2"
                                        />
                                    </div>
                                </div>

                                <div className="form-field">
                                    <label htmlFor="contactnumber" className="block font-medium text-gray-900">
                                        Contact Number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="contactnumber"
                                            name="contactnumber"
                                            type="number"
                                            required
                                            autoComplete="number"
                                            onChange={handlesignupform}
                                            value={stateformdata.contactnumber}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-section-second sm:w-[30vw] md:w-[20vw] flex flex-col gap-5 sm:text-sm lg:text-md xl:text-lg">

                                <div className="form-field">
                                    <label htmlFor="email" className="block font-medium text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            autoComplete="email"
                                            value={stateformdata.email}
                                            onChange={handlesignupform}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2"
                                        />
                                    </div>
                                </div>

                                <div className="form-field">
                                    <label htmlFor="textpassword" className="block font-medium text-gray-900">
                                        Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="textpassword"
                                            name="textpassword"
                                            type="text"
                                            required
                                            autoComplete="text"
                                            value={stateformdata.textpassword}
                                            onChange={handlesignupform}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2"
                                        />
                                    </div>
                                </div>

                                <div className="form-field">
                                    <label htmlFor="password" className="block font-medium text-gray-900">
                                        Confirm Password
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            required
                                            autoComplete="password"
                                            value={stateformdata.password}
                                            onChange={handlesignupform}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2"
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="sign-up-button flex justify-between items-end min-[250px]:w-[80vw] sm:w-[65vw] md:w-[42vw] 3xl:w-[41.5vw]">
                            <Button className="min-[250px]:text-xs min-[250px]:px-2 min-[250px]:py-1 sm:px-4 sm:py-2 sm:text-sm md:text-md  px-4 py-2 bg-purple-700 border-2 border-purple-700 text-white font-bold rounded-lg hover:bg-white hover:text-purple-700 hover:cursor-pointer" onClick={handlesubmitform}>Sign Up</Button>

                            <div className="sign-in-button flex justify-center items-center gap-2">
                                <h1 className="text-blue-600 font-bold min-[250px]:text-right min-[250px]:text-xs sm:text-sm md:text-md">
                                    Already Have An Account?
                                </h1>
                                <Link to={"/auth/HR/login"}>
                                    <Button className="min-[250px]:text-xs min-[250px]:px-2 min-[250px]:py-1 sm:px-4 sm:py-2 sm:text-sm md:text-md px-4 py-2 bg-purple-700 border-2 border-purple-700 text-white font-bold rounded-lg hover:bg-white hover:text-purple-700 hover:cursor-pointer">Sign In</Button>
                                </Link>
                            </div>
                        </div>
                    </div> */}

                
                
                <div className="form-content-section">
                    <div className="form-header mb-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Create HR Account</h1>
                        <p className="text-gray-600">Join our team and start managing your organization</p>
                    </div>
                    
                    <div className="form-button-group w-full grid grid-cols-1 gap-5">

                    <div className="form-container grid min-[250px]:grid-cols-1 sm:grid-cols-2 w-full min-[250px]:gap-3 sm:gap-10 justify-center items-center">

                        <div className="form-group-1 w-full flex flex-col gap-3">
                            <div className="label-field-pair flex flex-col ">
                                <label htmlFor="firstname">
                                    First Name
                                </label>
                                <input
                                    id="firstname"
                                    name="firstname"
                                    type="text"
                                    required
                                    autoComplete="text"
                                    value={stateformdata.firstname}
                                    onChange={handlesignupform}
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2" />
                            </div>
                            <div className="label-field-pair flex flex-col">
                                <label htmlFor="lastname">
                                    last Name
                                </label>
                                <input
                                    id="lastname"
                                    name="lastname"
                                    type="text"
                                    required
                                    autoComplete="lastname"
                                    value={stateformdata.lastname}
                                    onChange={handlesignupform}
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2" />
                            </div>
                            <div className="label-field-pair flex flex-col">
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    autoComplete="email"
                                    value={stateformdata.email}
                                    onChange={handlesignupform}
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2" />
                            </div>
                            <div className="label-field-pair flex flex-col">
                                <label htmlFor="textpassword">
                                    Password
                                </label>
                                <input
                                    id="textpassword"
                                    name="textpassword"
                                    type="text"
                                    required
                                    autoComplete="textpassword"
                                    value={stateformdata.textpassword}
                                    onChange={handlesignupform}
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2" />
                            </div>
                            <div className="label-field-pair flex flex-col">
                                <label htmlFor="password">
                                    Confirm Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="password"
                                    value={stateformdata.password}
                                    onChange={handlesignupform}
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2" />
                            </div>
                        </div>

                        <div className="form-group-2 w-full flex flex-col gap-3">
                            <div className="label-field-pair flex flex-col">
                                <label htmlFor="contactnumber">
                                    Contact Number
                                </label>
                                <input
                                    id="contactnumber"
                                    name="contactnumber"
                                    type="number"
                                    required
                                    autoComplete="text"
                                    value={stateformdata.contactnumber}
                                    onChange={handlesignupform}
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2" />
                            </div>
                            <div className="label-field-pair flex flex-col">
                                <label htmlFor="name">
                                    Organization Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    autoComplete="text"
                                    value={stateformdata.name}
                                    onChange={handlesignupform}
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2" />
                            </div>
                            <div className="label-field-pair flex flex-col">
                                <label htmlFor="description">
                                    Organization Description
                                </label>
                                <input
                                    id="description"
                                    name="description"
                                    type="text"
                                    required
                                    autoComplete="text"
                                    value={stateformdata.description}
                                    onChange={handlesignupform}
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2" />
                            </div>
                            <div className="label-field-pair flex flex-col">
                                <label htmlFor="OrganizationURL">
                                    Organization URL
                                </label>
                                <input
                                    id="OrganizationURL"
                                    name="OrganizationURL"
                                    type="text"
                                    required
                                    autoComplete="text"
                                    value={stateformdata.OrganizationURL}
                                    onChange={handlesignupform}
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2" />
                            </div>
                            <div className="label-field-pair flex flex-col">
                                <label htmlFor="OrganizationMail">
                                    Organization Mail
                                </label>
                                <input
                                    id="OrganizationMail"
                                    name="OrganizationMail"
                                    type="text"
                                    required
                                    autoComplete="text"
                                    value={stateformdata.OrganizationMail}
                                    onChange={handlesignupform}
                                    className="w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6 p-2" />
                            </div>

                        </div>
                    </div>

                    <div className="buttons w-full flex justify-between">
                        <Button className="min-[250px]:text-xs min-[250px]:px-2 min-[250px]:py-1 sm:px-4 sm:py-2 sm:text-sm md:text-md  px-4 py-2 bg-purple-700 border-2 border-purple-700 text-white font-bold rounded-lg hover:bg-white hover:text-purple-700 hover:cursor-pointer" onClick={handlesubmitform}>Sign Up</Button>
                        <div className="sing-in flex justify-center items-center gap-2">
                            <p className="min-[250px]:text-xs sm:text-sm">Already Have an Account?</p>
                            <Link to={"/auth/HR/login"}>
                                <Button className="min-[250px]:text-xs min-[250px]:px-2 min-[250px]:py-1 sm:px-4 sm:py-2 sm:text-sm md:text-md px-4 py-2 bg-purple-700 border-2 border-purple-700 text-white font-bold rounded-lg hover:bg-white hover:text-purple-700 hover:cursor-pointer">Sign In</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}