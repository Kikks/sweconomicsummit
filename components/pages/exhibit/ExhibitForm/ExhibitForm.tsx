import type { FormEvent } from 'react';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

import Input from '../../../ui/Input';
import Select from '../../../ui/Select';
import { countries } from '../../resgister/RegisterForm/data';

const formURL =
  'https://script.google.com/macros/s/AKfycbw0Mwy9gTrx4eVJ00vVKSJyTrF5CfDFXZUl9Eo8t2barw82Av75MgPwsLIiMjSxasczrw/exec';

const ExhibitForm = () => {
  const [loading, setLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [payload, setPayload] = useState({
    'Full Name': '',
    'Phone Number': '',
    Email: '',
    Country: '',
    Organization: '',
    'Product Category': '',
  });

  const handleChange = (e: FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    setPayload({
      ...payload,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData();
    for (let i = 0; i < Object.keys(payload).length; i += 1) {
      formData.append(Object.keys(payload)[i], Object.values(payload)[i]);
    }
    fetch(formURL, { method: 'POST', body: formData })
      .then((res) => {
        if (res.status === 200) {
          setIsComplete(true);
        } else {
          toast.error('Something went wrong. Please try again later.');
        }
      })
      .catch((err) => {
        toast.error('Something went wrong. Please try again later.');
        console.log(err);
      })
      .finally(() => setLoading(false));
  };

  return (
    <section className="w-full px-5 py-40 pt-20 md:px-10 md:pt-40 lg:px-20">
      {isComplete ? (
        <div className="flex flex-col items-center space-y-5 pb-20 text-center">
          <h2 className="text-2xl md:text-3xl">Registration Complete!</h2>
          <span className="max-w-[50ch]">
            Thank you for registering. We will reach out to you soon.
          </span>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="container grid !max-w-[700px] grid-cols-1 gap-x-10 gap-y-2 md:grid-cols-2"
        >
          <div>
            <Input
              required
              label="Full Name"
              name="Full Name"
              value={payload['Full Name']}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <Input
              required
              label="Phone Number"
              type="tel"
              name="Phone Number"
              value={payload['Phone Number']}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <Input
              required
              label="Email Address"
              type="email"
              name="Email"
              value={payload.Email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <Input
              required
              label="Organization"
              name="Organization"
              value={payload.Organization}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <Select
              required
              label="Country"
              options={['', ...countries].map((item) => ({
                label: item,
                value: item,
              }))}
              name="Country"
              value={payload.Country}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <Input
              required
              label="Product Category"
              name="Product Category"
              value={payload['Product Category']}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="col-span-1 flex justify-end md:col-span-2">
            <button
              type="submit"
              disabled={loading}
              className="relative z-[500] overflow-hidden rounded-sm border border-blue-500 bg-white px-5 py-3 font-semibold text-blue-500 duration-300 before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-0 before:rounded-sm before:bg-blue-500 before:mix-blend-difference before:duration-300 disabled:cursor-not-allowed disabled:before:!w-0 lg:hover:before:w-full"
            >
              <span className="">{loading ? 'Loading...' : 'Submit'}</span>
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default ExhibitForm;
