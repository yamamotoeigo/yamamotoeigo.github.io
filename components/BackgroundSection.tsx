'use client';

import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

type BackgroundItem = {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'work';
};

const backgroundData: BackgroundItem[] = [
  {
    id: 1,
    title: "学士号（工学）取得",
    organization: "近畿大学理工学部情報学科",
    period: "2020/04/01 - 2024/03/31",
    description: "電子計算機研究会, KINDAI Info-Tech HUB などの情報系団体に所属し, それぞれの団体で副会長, 副キャプテンを務めました.",
    type: "education"
  },
  {
    id: 2,
    title: "修士号（工学）取得予定",
    organization: "近畿大学大学院総合理工学研究科エレクトロニクス系工学専攻",
    period: "2024/04/01 - 現在",
    description: `主にAI x Networkの領域で研究を行っています. 
                  大規模情報処理システム研究室に所属.`,
    type: "education"
  }
];

export default function BackgroundSection() {
  return (
    <section id="background" className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Background</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>

          {backgroundData.map((item, index) => (
            <div key={item.id} className={`mb-8 flex ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className="w-1/2"></div>
              <div className={`w-6 h-6 absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full ${item.type === 'education' ? 'bg-green-500' : 'bg-blue-500'} z-10`}>
                {item.type === 'education' ? <FaGraduationCap className="text-white w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" /> : <FaBriefcase className="text-white w-4 h-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
              </div>
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <div className="bg-white p-4 rounded shadow">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.organization}</p>
                  <p className="text-sm text-gray-500">{item.period}</p>
                  {/* <p className="mt-2">{item.description}</p> */}
                  <p className="mt-2">
                    {item.description.split('\n').map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

