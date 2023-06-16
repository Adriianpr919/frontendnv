import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
///////////////////////////////////////////////////////////////////////////////////////////////

// eslint-disable-next-line no-unused-vars
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const MenuCategory = ({ category, subcategory, tripletecategory }) => {
  const { id } = useParams();
  return (
    <>
      <div className="grid grid-cols-500 gap-x-500 gap-y-500 lg:grid-cols-500">
        {/* Filters */}
        <form className="hidden lg:block">
          {category.map((category, index) => (
            <Disclosure as="div" key={category._id} className="border-b border-gray-200 py-6">
              {({ open }) => (
                <>
                  <h3 className="-my-3 flow-root">
                    <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                      <span className="font-medium badge badge-primary text-gray-900" style={{ fontSize: "15px" }}>
                        <a href={`/shop/${category._id}`} key={index} rel="noopener noreferrer" style={{ fontSize: "15px" }}>
                          <code><FontAwesomeIcon icon="fa-solid fa-list-check" /> {category.titlecategory}</code> <code className='hidden'>{id}</code>
                        </a>
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
                          <div key={subcategory._id}>
                            <a href={`/shop/${category._id}`} key={index} rel="noopener noreferrer" style={{ fontSize: "15px" }}>
                              <FontAwesomeIcon icon="fa fa-angle-double-right wv_circle" style={{ fontSize: "15px" }} /> {subcategory.titlesubcategory} <code className='hidden'>{id}</code>
                            </a>
                          </div>
                        ))
                      }
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
                          <div key={tripletecategory._id}>
                            <a href={`/shop/${category._id}`} key={index} rel="noopener noreferrer" style={{ fontSize: "15px" }}>
                              <FontAwesomeIcon icon="fa fa-angle-double-right wv_circle" style={{ fontSize: "15px" }} /> {tripletecategory.titletripletecategory} <code className='hidden'>{id}</code>
                            </a>
                          </div>
                        ))
                      }
                    </div>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </form>
        {/* Product grid */}
        <div className="lg:col-span-3">{/* Your content */}</div>
      </div>
    </>
  );
}

export default MenuCategory;