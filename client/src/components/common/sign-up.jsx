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

                <div className="form-content-section">
                    <div className="form-header mb-6">
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">Create HR Account</h1>
                        <p className="text-gray-600">Join our team and start managing your organization</p>
                    </div>
                    
                    <form onSubmit={handlesubmitform} className="w-full">
                        <div className="form-container grid min-[250px]:grid-cols-1 sm:grid-cols-2 w-full min-[250px]:gap-3 sm:gap-10 justify-center items-center">
                            <div className="form-group-1 w-full flex flex-col gap-3">
                                <div className="label-field-pair flex flex-col">
                                    <label htmlFor="firstname">First Name</label>
                                    <input
                                        id="firstname"
                                        name="firstname"
                                        type="text"
                                        required
                                        autoComplete="text"
                                        value={stateformdata.firstname}
                                        onChange={handlesignupform}
                                        className="min-[250px]:text-xs sm:text-sm md:text-md px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>

                                <div className="label-field-pair flex flex-col">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input
                                        id="lastname"
                                        name="lastname"
                                        type="text"
                                        required
                                        autoComplete="text"
                                        value={stateformdata.lastname}
                                        onChange={handlesignupform}
                                        className="min-[250px]:text-xs sm:text-sm md:text-md px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>

                                <div className="label-field-pair flex flex-col">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        value={stateformdata.email}
                                        onChange={handlesignupform}
                                        className="min-[250px]:text-xs sm:text-sm md:text-md px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>

                                <div className="label-field-pair flex flex-col">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        autoComplete="new-password"
                                        value={stateformdata.password}
                                        onChange={handlesignupform}
                                        className="min-[250px]:text-xs sm:text-sm md:text-md px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>

                                <div className="label-field-pair flex flex-col">
                                    <label htmlFor="textpassword">Confirm Password</label>
                                    <input
                                        id="textpassword"
                                        name="textpassword"
                                        type="password"
                                        required
                                        autoComplete="new-password"
                                        value={stateformdata.textpassword}
                                        onChange={handlesignupform}
                                        className="min-[250px]:text-xs sm:text-sm md:text-md px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            <div className="form-group-2 w-full flex flex-col gap-3">
                                <div className="label-field-pair flex flex-col">
                                    <label htmlFor="contactnumber">Contact Number</label>
                                    <input
                                        id="contactnumber"
                                        name="contactnumber"
                                        type="tel"
                                        required
                                        autoComplete="tel"
                                        value={stateformdata.contactnumber}
                                        onChange={handlesignupform}
                                        className="min-[250px]:text-xs sm:text-sm md:text-md px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>

                                <div className="label-field-pair flex flex-col">
                                    <label htmlFor="name">Organization Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        autoComplete="organization"
                                        value={stateformdata.name}
                                        onChange={handlesignupform}
                                        className="min-[250px]:text-xs sm:text-sm md:text-md px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>

                                <div className="label-field-pair flex flex-col">
                                    <label htmlFor="description">Organization Description</label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        required
                                        rows="3"
                                        value={stateformdata.description}
                                        onChange={handlesignupform}
                                        className="min-[250px]:text-xs sm:text-sm md:text-md px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                                    />
                                </div>

                                <div className="label-field-pair flex flex-col">
                                    <label htmlFor="OrganizationURL">Organization URL</label>
                                    <input
                                        id="OrganizationURL"
                                        name="OrganizationURL"
                                        type="url"
                                        required
                                        autoComplete="url"
                                        value={stateformdata.OrganizationURL}
                                        onChange={handlesignupform}
                                        className="min-[250px]:text-xs sm:text-sm md:text-md px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>

                                <div className="label-field-pair flex flex-col">
                                    <label htmlFor="OrganizationMail">Organization Mail</label>
                                    <input
                                        id="OrganizationMail"
                                        name="OrganizationMail"
                                        type="email"
                                        required
                                        autoComplete="email"
                                        value={stateformdata.OrganizationMail}
                                        onChange={handlesignupform}
                                        className="min-[250px]:text-xs sm:text-sm md:text-md px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="buttons w-full flex justify-between mt-6">
                            <button 
                                type="submit"
                                className="min-[250px]:text-xs min-[250px]:px-2 min-[250px]:py-1 sm:px-4 sm:py-2 sm:text-sm md:text-md px-4 py-2 bg-purple-700 border-2 border-purple-700 text-white font-bold rounded-lg hover:bg-white hover:text-purple-700 hover:cursor-pointer transition-all duration-200" 
                                onClick={handlesubmitform}
                            >
                                Sign Up
                            </button>
                            <div className="sing-in flex justify-center items-center gap-2">
                                <p className="min-[250px]:text-xs sm:text-sm">Already Have an Account?</p>
                                <Link to={"/auth/HR/login"}>
                                    <Button className="min-[250px]:text-xs min-[250px]:px-2 min-[250px]:py-1 sm:px-4 sm:py-2 sm:text-sm md:text-md px-4 py-2 bg-purple-700 border-2 border-purple-700 text-white font-bold rounded-lg hover:bg-white hover:text-purple-700 hover:cursor-pointer">Sign In</Button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}