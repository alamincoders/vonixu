import Image from 'next/image';
import Link from 'next/link';
import office from '../../assets/agency/office.jpg'
import Button from '../shared/Button';

const Relationships = () => {
  return (
    <>
      <section className="container py-10">
        <div className=" grid grid-col-1 lg:grid-cols-2 space-x-10 items-center ">
          <div className="w-full ">
            <Image className="rounded-lg" src={office} alt="" />
          </div>
          <div>
            <p className="text-[18px] font-normal ">
              We pursue relationships based on transparency, persistence, mutual
              trust, and integrity with our employees, customers and other
              business partners.
            </p>
            <div className="flex space-x-5">
              <Link href="webPortfolio">
                <Button title="Our Portfolio" />
              </Link>
              <Link href="/agency">
                <Button title="Client Testimonials" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Relationships;