const ImageUpload = (event) => {
   /* const [ImgBase64, setImgBase64] = useState(''); // 업로드 될 이미지
    const [imgFile, setImgFile] = useState(null); // 파일 전송을 위한 state

    let reader = new FileReader();

    reader.onloadend = (e) => {
        // 2. 읽기가 완료되면 아래 코드 실행
        const base64 = reader.result;
        if (base64) {
            // 파일 base64 상태 업데이트
            setImgBase64(base64.toString());
        }
    };
    if (event.target.files[0]) {
        // 1. 파일을 읽어 버퍼에 저장
        reader.readAsDataURL(event.target.files[0]);
        // 파일 상태 업데이트
        setImgFile(event.target.files[0]);
        console.log(imgFile);
    }
};
return (
    <Fragment>/!*
        <form id='formEl'>
            <ImgUpload>
                //props로 전달받을 박스 크기와 이미지 크기
                <ImgPreview
                    boxWidth={boxWidth}
                    boxHeight={boxHeight}
                    imgWidth={imgWidth}
                    imgHeight={imgHeight}
                >
                    {ImgBase64 ? (
                        <img src={ImgBase64} />
                    ) : (
                        //이미지 업로드 되기 전 기본 이미지
                        <BaseImg src='/public/Images/intern_seller_profile.jpeg' />
                    )}
                </ImgPreview>
                <ImgAdd>
                    <label htmlFor='imgFile'>이미지 선택</label>
                    <input type='file' id='imgFile' onChange={handleChangeFile} />
                </ImgAdd>
            </ImgUpload>
        </form>
    </Fragment>
)*/
};

export default ImageUpload;

