const projectData = [
  {
    name: 'IEEE GCCE 2023 にて研究発表',
    description: '学部4年時に分散深層学習に関する研究で国際会議にて発表',
    technologies: 'Python, Numpy, PyTorch',
    details: `
        この研究は, 分散深層学習に関するもので, PythonとPyTorchを使用して実装しました.
        地理的に分散したデータセンターやクラスタを用いる環境での分散学習に関する手法の考察を行いました.
        論文リンク: https://ieeexplore.ieee.org/document/10315304
    `,
    images: ['../assets/images/gcce.jpg'],
    demo: 'https://demo-url.com',
    link: 'https://github.com/yamamotoeigo/consideration_of_computer_power',
  },
  {
    name: 'リアルタイム映像解析システム',
    description: '近畿大学オープンキャンパスにて所属研究室のブースで展示',
    technologies: 'Python, Flask, Yolo, OpenCV',
    details: `
        このプロジェクトは, 近畿大学のオープンキャンパスにて展示したリアルタイム映像解析システムです.
        PythonのFlaskフレームワークを使用してWebアプリケーションとして実装し、YoloとOpenCVを用いて映像解析を行いました.
        展示では, カメラで撮影した映像を解析し, 検出した人数により検出モデルを切り替えるシステムです.
    `,
    images: ['../assets/images/realtime_demo.png', '../assets/images/realtime.png', '../assets/images/open-campus.jpg'],
    demo: 'https://demo-url.com',
    link: 'https://github.com/yamamotoeigo/KD2023-OpenCampus',
  },
  {
    name: 'リソース可視化システム',
    description: '研究室のリソース使用状況などを可視化するシステム',
    technologies: 'Python, Streamlit, Shell Script',
    details: `
        研究室のリソース使用状況を可視化するシステムです.
        PythonのStreamlitフレームワークを使用してWebアプリケーションとして実装しました.
        CPU, メモリ, GPU等の使用状況を確認することができます.
    `,
    images: ['../assets/images/resource_demo.png'],
    demo: 'https://demo-url.com',
    link: 'https://github.com/yamamotoeigo/KD2023-OpenCampus',
  },
  {
    name: '研究室のインフラ構築',
    description: '研究室のネットワーク環境をVPNで構築',
    technologies: 'YAMAHA RTX830',
    details: `
        学部エリア, 院生エリア, クラウド基盤実験室と別のネットワーク環境だったが, VPNで接続することで一つのネットワーク環境に統合.
    `,
    images: ['../assets/images/vpn.png', '../assets/images/yamaha.jpg'],
    demo: 'https://demo-url.com',
    link: 'https://github.com/yamamotoeigo/KD2023-OpenCampus',
  },
  {
    name: 'GMO DevSecOpsThon 2024に参加',
    description: 'GMOインターネットグループ様主催のハッカソンに参加',
    technologies: 'Python, Streamlit, Langchain, Docker',
    details: `
        GMOインターネットグループ様主催のハッカソンに参加しました.
        詳細は言えないですが, インフラ周りのトラブルシューティングとLLMを用いたChatBotの開発を行いました.
        タスクが与えられたクリアしたタスクによって得点が与えられるようなコンペ形式で自チーム(Fチーム)は2位の成績を収めました.
        H100を使用させてもらえる貴重な機会でとても楽しかったです.
        引退したサーバを分解して見せていただきました.
    `,
    images: ['../assets/images/score.jpg'],
    demo: 'https://demo-url.com',
    link: 'https://github.com/yamamotoeigo/DevSecOpsThon2024',
  },
  {
    name: 'KC3 2023にて登壇',
    description: 'KC3 2023の学生勉強会にてCNNをテーマに登壇',
    technologies: 'Python',
    details: `
        KC3 2023の学生勉強会にて, \"ゼロから始めるニューラルネットワーク ~CNN編~\" というテーマで登壇しました.
        ニューラルネットワークの基礎から始まり, イメージがしやすい応用例としてCNNについて解説をしました.
        終了後のアンケートにて, 初学者でも楽しくわかりやすく理解できましたという声が多く, 嬉しい限りです.
        登壇資料(Speaker Deck): https://speakerdeck.com/yamamotoeigo/zerokarashi-meruniyurarunetutowaku-cnnbian
    `,
    images: ['../assets/images/kc3.jpg'],
    demo: 'https://demo-url.com',
    link: 'https://github.com/yamamotoeigo/KC3_CNN',
  }
];

export default projectData;
