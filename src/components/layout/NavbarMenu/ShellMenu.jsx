/* eslint-disable jsx-a11y/anchor-is-valid */
import { useParams } from 'react-router-dom';
import React, { Fragment, useEffect, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import {
  Bars3Icon,
  GlobeAltIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, FunnelIcon } from '@heroicons/react/20/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//////////////////////////////////////////////////////////////////////////////////
import MenuCategory from './MenuCategory';
//////////////////////////////////////////////////////////////////////////////////
import 'flowbite';
//////////////////////////////////////////////////////////////////////////////////
import { categoryApi } from '../../../api/category/categoryApi';
import { subcategoryApi } from '../../../api/subcategory/subcategoryApi';
import { tripletecategoryApi } from '../../../api/tripletecategory/tripletecategoryApi';
//////////////////////////////////////////////////////////////////////////////////

const menu = [
  {
    name: 'Inicio.',
    href: '/',
    icon: GlobeAltIcon
  },
  {
    name: 'Filtrar Por.',
    href: '/shop',
    icon: FunnelIcon
  },
]

const callsToAction = [
  { name: 'Contactos.', href: '/location', icon: PhoneIcon }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ShellMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const { id } = useParams();

  const [category, setCategory] = useState([]); //default is empty, no Category
  const [subcategory, setSubcategory] = useState([]);    //default is empty, no Subcategory
  const [tripletecategory, setTripletecategory] = useState([]);    //default is empty, no Tripletecategory

  useEffect(() => {
    //fetch all products from db
    const fetchData = async () => {

      //fetch all category
      const resultCategory = await categoryApi.get('/all');
      console.log(resultCategory.data);
      setCategory(resultCategory.data);

      //fetch all subcategory
      const resultSubcategory = await subcategoryApi.get('/all');
      console.log(resultSubcategory.data);
      setSubcategory(resultSubcategory.data);

      //fetch all Tripletecategory
      const resultTripletecategory = await tripletecategoryApi.get('/all');
      console.log(resultTripletecategory.data);
      setTripletecategory(resultTripletecategory.data);
    }

    fetchData();

  }, []);
  return (
    <>
      <header className="bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a rel="noopener noreferrer" className="-m-1.5 p-1.5">
              <span className="sr-only" style={{ fontSize: "15px" }}>
                <FontAwesomeIcon icon="fa-solid fa-bars" style={{ fontSize: "15px" }} /> Men&#250;.
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)} style={{ fontSize: "15px" }}
            >
              <span className="sr-only" style={{ fontSize: "15px" }}>Abrir Men&#250; Principal</span>
              <Bars3Icon className="h-6 w-6" style={{ fontSize: "15px" }} aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" style={{ fontSize: "15px" }}>
                <FontAwesomeIcon icon="fa-solid fa-bars" style={{ fontSize: "15px" }} /> Men&#250;.
                <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" style={{ fontSize: "15px" }} aria-hidden="true" />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4">
                    {menu.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-stone-600" aria-hidden="true" style={{ fontSize: "15px" }} />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} rel="noopener noreferrer" className="block font-semibold text-gray-900" style={{ fontSize: "15px" }}>
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-4">
                    <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                      <MenuCategory category={category} subcategory={subcategory} tripletecategory={tripletecategory} key={id} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        rel="noopener noreferrer" style={{ fontSize: "15px" }}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" style={{ fontSize: "15px" }} />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
          </Popover.Group>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a rel="noopener noreferrer" className="-m-1.5 p-1.5">
                <span className="sr-only" style={{ fontSize: "15px" }}>
                  <FontAwesomeIcon icon="fa-solid fa-bars" style={{ fontSize: "15px" }} /> Men&#250;.
                </span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)} style={{ fontSize: "15px" }}
              >
                <span className="sr-only" style={{ fontSize: "15px" }}>Cerrar Men&#250;</span>
                <XMarkIcon className="h-6 w-6" style={{ fontSize: "15px" }} aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {[...category].map((category, index) => (
                    <Disclosure as="div" key={category._id} className="-mx-3">
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" style={{ fontSize: "15px" }}>
                            <a href={`/shop/${category._id}`} key={index} rel="noopener noreferrer" style={{ fontSize: "15px" }}>
                              <FontAwesomeIcon icon="fa-solid fa-list-check" style={{ fontSize: "15px" }} /> {category.titlecategory} <code className='hidden'>{id}</code>
                            </a>
                            <ChevronDownIcon
                              className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')} style={{ fontSize: "15px" }}
                              aria-hidden="true"
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="mt-2 space-y-2">
                            {[...subcategory].map((subcategory, index) => (
                              <Disclosure.Button
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50" key={subcategory._id}
                              >
                                <div>
                                  <a href={`/shop/${category._id}`} key={index} rel="noopener noreferrer" style={{ fontSize: "15px" }}>
                                    <FontAwesomeIcon icon="fa fa-angle-double-right wv_circle" style={{ fontSize: "15px" }} /> {subcategory.titlesubcategory} <code className='hidden'>{id}</code>
                                  </a>
                                </div>
                              </Disclosure.Button>
                            ))}
                            <hr className="my-4" />
                            {[...tripletecategory].map((tripletecategory, index) => (
                              <Disclosure.Button
                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50" key={tripletecategory._id}
                              >
                                <div>
                                  <a href={`/shop/${category._id}`} key={index} rel="noopener noreferrer" style={{ fontSize: "15px" }}>
                                    <FontAwesomeIcon icon="fa fa-angle-double-right wv_circle" style={{ fontSize: "15px" }} /> {tripletecategory.titletripletecategory} <code className='hidden'>{id}</code>
                                  </a>
                                </div>
                              </Disclosure.Button>
                            ))}
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50" style={{ fontSize: "15px" }}>
                          <FontAwesomeIcon icon="fa-solid fa-bars" style={{ fontSize: "15px" }} /> Men&#250;.
                          <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')} style={{ fontSize: "15px" }}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {[...menu, ...callsToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as="a"
                              href={item.href} rel="noopener noreferrer" style={{ fontSize: "15px" }}
                              className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
}

export default ShellMenu;