'use client';

import Image from 'next/image';

const profileData = {
  name: 'Eigo Yamamoto',
  profession: 'Kindai Univ. Student',
  bio: `26卒の大学院生です.
        ネットワークxAIの領域で研究をしています.
        自宅サーバの運用をしたりWebAppのバックエンドを書いています.`
};

export default function ProfileSection() {
  return (
    <section id="profile" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col items-center space-y-8">
          {/* プロフィール画像 */}
          <div className="w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64">
            <Image
              src="/icondot2.png"
              alt={`${profileData.name}'s profile picture`}
              width={256}
              height={256}
              className="rounded-full object-cover w-full h-full"
            />
          </div>

          {/* プロフィール情報 */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">{profileData.name}</h3>
            <h4 className="text-xl text-gray-600 mb-4">{profileData.profession}</h4>

            {/* Bio の改行対応 */}
            <p className="text-lg mb-4">
              {profileData.bio.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
