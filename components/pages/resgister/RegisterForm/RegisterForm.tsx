import React from 'react';

import Input from '../../../ui/Input';
import Select from '../../../ui/Select';
import { countries, nationality, titles } from './data';

const RegisterForm = () => {
  return (
    <section className="w-full px-5 py-40 pt-20 md:px-10 md:pt-40 lg:px-20">
      <form className="container grid !max-w-[700px] grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-2">
        <div>
          <Select
            required
            label="Title"
            options={['', ...titles].map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </div>
        <div>
          <Input required label="Email Address" type="email" />
        </div>
        <div>
          <Input required label="First Name" />
        </div>
        <div>
          <Input required label="Last Name" />
        </div>
        <div>
          <Input required label="Designation" />
        </div>
        <div>
          <Input required label="Company" />
        </div>
        <div>
          <Input required label="Mobile Number" type="tel" />
        </div>

        <div>
          <Select
            required
            label="Nationality"
            options={['', ...nationality].map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </div>
        <div>
          <Select
            required
            label="Country of Residence"
            options={['', ...countries].map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </div>
        <div className="col-span-1 flex justify-end md:col-span-2">
          <button
            type="submit"
            className="relative z-[500] overflow-hidden rounded-sm border border-blue-500 bg-white px-5 py-3 font-semibold text-blue-500 duration-300 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-0 before:rounded-sm before:bg-blue-500 before:mix-blend-difference before:duration-300 lg:hover:before:w-full"
          >
            <span className="">Register</span>
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegisterForm;
