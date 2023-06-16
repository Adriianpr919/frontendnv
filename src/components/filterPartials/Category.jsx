import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { useParams } from 'react-router-dom';
///////////////////////////////////////////////////////////////////////////////////////////////

// eslint-disable-next-line no-unused-vars
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Category = ({ category, filterResult, subcategory, filterResult2, tripletecategory, filterResult3 }) => {
  const { id } = useParams();
  return (
    <div className='f-filterDiv'>
      <div className="f-buttons">
        <div className="grid grid-cols-500 gap-x-500 gap-y-500 lg:grid-cols-500">
          <form className="lg:block">
            {category.map((category, index) => (
              <Disclosure as="div" key={category._id} className="border-b border-gray-200 py-6">
                {({ open }) => (
                  <>
                    <h3 className="-my-3 flow-root">
                      <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className="font-medium badge badge-primary text-gray-900" style={{ fontSize: "15px" }}>
                          <div className="space-y-4">
                            <h3 className="font-semibold mb-2">
                              <p style={{ fontSize: "15px" }}>
                                <code className='hidden'>{id}</code>
                              </p>
                            </h3>
                            <div>
                              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                  <div className="flex items-center pl-3">
                                    <input
                                      id="horizontal-list-radio-license"
                                      type="radio"
                                      style={{ fontSize: "15px" }}
                                      onClick={() => filterResult(category.titlecategory)}
                                      key={index}
                                      name="list-radio"
                                      className="w-4 h-4 text-stone-600 bg-gray-100 border-gray-300 focus:ring-stone-500 dark:focus:ring-stone-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label
                                      htmlFor="horizontal-list-radio-license"
                                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                      style={{ fontSize: "15px" }}>
                                      <code>
                                        <i className="fa fa-angle-double-right wv_circle" /> {category.titlecategory}
                                      </code>
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                  <div className="flex items-center pl-3">
                                    <input
                                      id="horizontal-list-radio-license"
                                      type="radio"
                                      style={{ fontSize: "15px" }}
                                      onClick={() => filterResult()}
                                      name="list-radio"
                                      className="w-4 h-4 text-stone-600 bg-gray-100 border-gray-300 focus:ring-stone-500 dark:focus:ring-stone-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label
                                      htmlFor="horizontal-list-radio-license"
                                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                      style={{ fontSize: "15px" }}>
                                      <code>
                                        <i className="fa fa-angle-double-right wv_circle" /> Ver Todos.
                                      </code>
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </span>
                        <span className="ml-6 flex items-center">
                          {open ? (
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                          ) : (
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6">
                      <div className="space-y-4">
                        <h3 className="font-semibold mb-2">
                          <p style={{ fontSize: "15px" }}>
                            <code className='hidden'>{id}</code>
                          </p>
                        </h3>
                        {
                          subcategory.map((subcategory, index) => (
                            <div>
                              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                  <div className="flex items-center pl-3">
                                    <input
                                      id="horizontal-list-radio-license"
                                      type="radio"
                                      style={{ fontSize: "15px" }}
                                      onClick={() => filterResult2(subcategory.titlesubcategory)}
                                      key={index}
                                      name="list-radio"
                                      className="w-4 h-4 text-stone-600 bg-gray-100 border-gray-300 focus:ring-stone-500 dark:focus:ring-stone-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label
                                      htmlFor="horizontal-list-radio-license"
                                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                      style={{ fontSize: "15px" }}>
                                      <i className="fa fa-angle-double-right wv_circle" /> {subcategory.titlesubcategory}
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          ))
                        }
                        <div>
                          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                              <div className="flex items-center pl-3">
                                <input
                                  id="horizontal-list-radio-license"
                                  type="radio"
                                  style={{ fontSize: "15px" }}
                                  onClick={() => filterResult2()}
                                  name="list-radio"
                                  className="w-4 h-4 text-stone-600 bg-gray-100 border-gray-300 focus:ring-stone-500 dark:focus:ring-stone-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label
                                  htmlFor="horizontal-list-radio-license"
                                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  style={{ fontSize: "15px" }}>
                                  <i className="fa fa-angle-double-right wv_circle" /> Ver Todos.
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <h3 className="font-semibold mb-2">
                        <span className="f-groupTitle badge badge-primary text-black" style={{ fontSize: "15px" }}>
                          <i className="fa fa-angle-double-right wv_circle" /> Opci&#243;nes. :*
                        </span>
                      </h3>
                      <div className="space-y-4">
                        <h3 className="font-semibold mb-2">
                          <p style={{ fontSize: "15px" }}>
                            <code className='hidden'>{id}</code>
                          </p>
                        </h3>
                        {
                          tripletecategory.map((tripletecategory, index) => (
                            <div>
                              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                  <div className="flex items-center pl-3">
                                    <input
                                      id="horizontal-list-radio-license"
                                      type="radio"
                                      style={{ fontSize: "15px" }}
                                      onClick={() => filterResult3(tripletecategory.titletripletecategory)}
                                      key={index}
                                      name="list-radio"
                                      className="w-4 h-4 text-stone-600 bg-gray-100 border-gray-300 focus:ring-stone-500 dark:focus:ring-stone-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                    <label
                                      htmlFor="horizontal-list-radio-license"
                                      className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                      style={{ fontSize: "15px" }}>
                                      <i className="fa fa-angle-double-right wv_circle" /> {tripletecategory.titletripletecategory}
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          ))
                        }
                        <div>
                          <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                              <div className="flex items-center pl-3">
                                <input
                                  id="horizontal-list-radio-license"
                                  type="radio"
                                  style={{ fontSize: "15px" }}
                                  onClick={() => filterResult3()}
                                  name="list-radio"
                                  className="w-4 h-4 text-stone-600 bg-gray-100 border-gray-300 focus:ring-stone-500 dark:focus:ring-stone-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                <label
                                  htmlFor="horizontal-list-radio-license"
                                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                  style={{ fontSize: "15px" }}>
                                  <i className="fa fa-angle-double-right wv_circle" /> Ver Todos.
                                </label>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Category;