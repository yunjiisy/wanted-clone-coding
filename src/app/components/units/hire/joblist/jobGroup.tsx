import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'

interface FilterProps {
  onFilterChange: (filterId: string) => void
}
const jobGroups = [
  {
    id: '1',
    name: '전체',
  },
  {
    id: '2',
    name: '개발',
  },
  {
    id: '3',
    name: '경영,비지니스',
  },
  {
    id: '4',
    name: '마케팅,광고',
  },
  {
    id: '5',
    name: '디자인',
  },
  {
    id: '6',
    name: '영업',
  },
  {
    id: '7',
    name: '고객서비스,리테일',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function JobGroup({ onFilterChange }: FilterProps) {
  const [selected, setSelected] = useState(jobGroups[0])

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="relative my-2">
            <div className="flex">
              <Listbox.Button className="relative py-3 pr-10 text-black sm:text-md sm:leading-6">
                <span className="flex items-center">
                  {/* truncate */}
                  <span className="ml-3 block text-2xl font-semibold">
                    {selected.name}
                  </span>
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                  {open ? (
                    <ChevronUpIcon
                      className="h-5 w-5 black"
                      aria-hidden="true"
                    />
                  ) : (
                    <ChevronDownIcon
                      className="h-5 w-5 black"
                      aria-hidden="true"
                    />
                  )}{' '}
                </span>
              </Listbox.Button>
              <span className="flex items-center">
                <span
                  className={classNames(
                    selected.name === '전체'
                      ? 'font-normal text-base text-gray-400'
                      : ' font-semibold text-lg',
                    'ml-3 block truncate',
                  )}
                >
                  {selected.name === '전체'
                    ? '직군을 선택해주세요.'
                    : selected.name}
                  {''}
                </span>
              </span>
            </div>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-40 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {jobGroups.map((jobgroup) => (
                  <Listbox.Option
                    key={jobgroup.id}
                    onClick={() => {
                      jobgroup.name === '전체'
                        ? onFilterChange('')
                        : onFilterChange(jobgroup.id)
                    }}
                    className={({ active }) =>
                      classNames(
                        active ? 'bg-gray-100' : 'text-black',
                        'relative cursor-default select-none py-2 pl-3 pr-9',
                      )
                    }
                    value={jobgroup}
                  >
                    {({ selected }) => (
                      <>
                        <div className="flex items-center">
                          <span
                            className={classNames(
                              selected
                                ? 'font-semibold text-blue-500'
                                : 'font-normal',
                              'ml-3 block truncate',
                            )}
                          >
                            {jobgroup.name}
                          </span>
                        </div>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  )
}
