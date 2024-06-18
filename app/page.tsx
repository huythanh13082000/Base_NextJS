import CardPrice from '@/components/card-price'
import CardReview from '@/components/card-review'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='min-h-screen'>
      <div className="xl:bg-[url('/images/background.svg')] bg-[url('/images/backgroud-mobile.svg')] w-full xl:h-[954px] min-h-[825px] flex items-center justify-center object-cover bg-cover bg-center bg-no-repeat">
        <div className='flex xl:flex-row flex-col items-center'>
          <div className='text-white flex flex-col xl:inline-block items-center mt-[65px] xl:mt-0'>
            <Image src={'/images/logo.png'} alt='' width={123} height={72} />

            <p className='xl:text-6xl xl:mt-8 font-bold text-[32px] my-4 xl:my-0'>
              웨딩토크
            </p>
            <p className='font-bold xl:text-[40px] xl:mt-7 xl:leading-[60px] opacity-65 text-xl leading-7 text-center xl:text-start'>
              결혼하고 싶은 그 사람 <br />
              바로 여기 있어요
            </p>
            <div>
              <p className='text-center xl:text-start xl:mt-[60px] xl:mb-[23px] mt-[24px] mb-4 xl:text-[13px] text-xs font-bold uppercase'>
                Download our app
              </p>
              <div className='flex gap-4'>
                <a href='https://docs.greenapps.kr'>
                  <Image
                    src={'/images/AppStore.png'}
                    alt=''
                    width={189}
                    height={60}
                    className='w-[155px] h-[48px] xl:w-[189px] xl:h-[60px]'
                  />
                </a>
                <a href='https://docs.greenapps.kr/undefined-1'>
                  <Image
                    src={'/images/PlayStore.png'}
                    alt=''
                    width={189}
                    height={60}
                    className='w-[155px] h-[48px] xl:w-[189px] xl:h-[60px]'
                  />
                </a>
              </div>
            </div>
          </div>
          <div>
            <Image
              src={'/images/PhoneMockup.svg'}
              alt=''
              width={855}
              height={814}
              className='h-[441px] xl:h-[815px]'
            />
          </div>
        </div>
      </div>

      <div className='xl:py-[100px] py-6 flex xl:flex-row  xl:gap-[73px] gap-2 justify-center items-center flex-col-reverse'>
        <Image src={'/images/image1.svg'} alt='' width={582} height={548} />
        <div className='xl:p-0 p-4 flex flex-col gap-6 xl:text-[19px] opacity-70 leading-[30px] text-[#161C2D]'>
          <p className='xl:text-5xl font-bold xl:leading-[60px] text-2xl text-black'>
            결혼할 상대를 찾고 <br className='hidden xl:inline-block' />
            있나요?
          </p>
          <p>
            웨딩토크는 결혼을 신중히 고민하는 사람들을 위해 <br />
            탄생한 앱입니다.
          </p>
          <p>
            본인 인증과 내 사진 인증을 통한 가입 후 시작할 수 <br />
            있으며 본인의 소득, 직업, 자산 등의 정보의 경우 추가 인증할 수{' '}
            <br />
            있습니다
          </p>
          <p>
            결혼할 상대를 만나고 싶다면 웨딩토크에서 시작해
            <br /> 보세요!
          </p>
        </div>
      </div>

      <div className='xl:py-[100px] py-6 flex flex-col xl:flex-row gap-[32px] xl:justify-center xl:items-center'>
        <div className='flex flex-col gap-6 xl:p-0 p-4 leading-[30px] text-[#161C2D]'>
          <p className='xl:text-5xl font-bold xl:leading-[60px] text-black text-2xl'>
            웨딩토크에서 가능해요
          </p>
          <p className='opacity-70 xl:text-[19px]'>
            결혼을 진지하게 생각하는 사람들과 소통할 수 있 <br />
            어요! 다양한 기능들로 상대를 탐색해 보세요.
          </p>
          <div>
            <p className='font-bold xl:text-xl text-lg'>약속해요</p>
            <p className='opacity-70 xl:text-[17px]'>
              웨딩토크에서는 사진도 용이 불가능하도록 제출 <br />한 사진과 현재
              카메라에 비친 내 모습의 AI 판독!
            </p>
          </div>
          <div>
            <p className='font-bold xl:text-xl text-lg'>인증해요</p>
            <p className='opacity-70 xl:text-[17px]'>
              여러분의 매력을 더욱 뽐낼 수 있는 뱃지의 경우, <br />
              추가 인증 및 심사를 통해 부여해 드리고 있어요
            </p>
          </div>
        </div>
        <Image src={'/images/image2.svg'} alt='' width={563} height={561} />
      </div>

      <div className='xl:pt-[66px] pt-6 xl:px-0 flex flex-col xl:justify-center xl:items-center'>
        <p className='font-bold xl:text-5xlx xl:mb-6 text-[26px] px-4 xl:px-0'>
          어떻게 가입하나요?
        </p>
        <p className='xl:text-[19px] opacity-70 mt-2 xl:mt-0 px-4 xl:px-0'>
          간편한 전화번호 인증으로 가입해 보세요
        </p>

        <div className='flex gap-[26px] xl:hidden mt-6 items-start mb-8 px-4 xl:px-0'>
          <Image src={'/images/step.svg'} alt='' width={32} height={266} />
          <div className='flex flex-col gap-[36px]'>
            <div className='flex flex-col gap-2'>
              <p className='font-bold'>전화번호 가입</p>
              <p className='text-sm opacity-70'>
                잊어버리기 쉬운 아이디와 비밀번호
                <br />
                대신 휴대폰 번호로 가입할 수 있어요
              </p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-bold'>전화번호 가입</p>
              <p className='text-sm opacity-70'>
                웨딩토크에서는 실사가 아니면
                <br />
                가입 불가! 그러니 잘 나온
                <br />
                사진을 준비해두세요!
              </p>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='font-bold'>전화번호 가입</p>
              <p className='text-sm opacity-70'>
                여기까지 하셨다면 마지막 단계만 남았어요.
                <br />
                담당자가 실사가 실제 맞는지 확인하고 심사
                <br />
                승인이 되세요!
              </p>
            </div>
          </div>
        </div>
        <div className='xl:hidden p-4 xl:px-0'>
          <Image
            src={'/images/image3.svg'}
            alt=''
            width={1110}
            height={652}
            className='w-full'
          />
        </div>

        <div className='hidden mt-[100px] xl:flex flex-col xl:flex-row gap-[100px] relative mb-[300px]'>
          <div className='absolute background-image-custom h-[2px] w-[256px] top-[35px] left-[166px] z-10 hidden xl:inline-block'></div>
          <div className='absolute background-image-custom h-[2px] w-[256px] top-[35px] right-[166px] hidden xl:inline-block'></div>
          <div className='flex flex-col items-center'>
            <p className='font-bold text-[36px] flex items-center justify-center text-white rounded-full bg-[#F64B4B] w-[73px] h-[73px]'>
              1
            </p>
            <p className='text-[21px] mt-[46px] mb-[14px] font-bold'>
              전화번호 가입
            </p>
            <p className='text-[17px] leading-8 opacity-70 text-center'>
              잊어버리기 쉬운 아이디와 비밀번호
              <br />
              대신 휴대폰 번호로 가입할 수 있어요
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='font-bold text-[36px] flex items-center justify-center text-white rounded-full bg-[#68D585] w-[73px] h-[73px]'>
              2
            </p>
            <p className='text-[21px] mt-[46px] mb-[14px] font-bold'>
              프로필 인증
            </p>
            <p className='text-[17px] leading-8 opacity-70 text-center'>
              웨딩토크에서는 실사가 아니면
              <br />
              가입 불가! 그러니 잘 나온
              <br />
              사진을 준비해두세요!
            </p>
          </div>
          <div className='flex flex-col items-center'>
            <p className='font-bold text-[36px] flex items-center justify-center text-white rounded-full bg-[#473BF0] w-[73px] h-[73px]'>
              3
            </p>
            <p className='text-[21px] mt-[46px] mb-[14px] font-bold'>
              심사승인
            </p>
            <p className='text-[17px] leading-8 opacity-70 text-center'>
              여기까지 하셨다면 마지막 단계만 남
              <br />
              았어요. 담당자가 실사가 실제 맞는지
              <br />
              확인하고 심사 승인이 되세요!
            </p>
          </div>
          <Image
            src={'/images/image3.svg'}
            alt=''
            width={1110}
            height={652}
            className='absolute bottom-[-600px] left-0 right-0'
          />
        </div>

        <div className="object-cover bg-cover bg-center bg-no-repeat xl:bg-[url('/images/background-black.svg')] bg-[url('/images/background-black-mobile.svg')]  xl:pt-[300px] xl:py-[100px] w-full text-white flex flex-col justify-center items-center">
          <div className='xl:hidden'>
            <Image
              src={'/images/Wave2.svg'}
              alt=''
              width={1110}
              height={652}
            />
          </div>
          <div>
            <p className='font-bold xl:text-5xl text-center xl:mt-[100px] mt-[32px] xl:leading-[60px] text-[26px] leading-9'>
              웨딩토크에서는 어떤 기능이 <br />
              있는지 알고 싶으신가요?
            </p>
          </div>

          <div className='flex gap-11 xl:mt-[88px] mt-11 flex-wrap max-w-[1097px] justify-center'>
            <div className='flex flex-col xl:flex-row xl:gap-6 gap-3  xl:items-start items-center'>
              <Image
                src={'/images/roadmap.svg'}
                alt=''
                width={33}
                height={44}
              />
              <div className='flex flex-col gap-4 text-center xl:text-start'>
                <p className='font-bold xl:text-[21px] text-lg'>채팅 기능</p>
                <p className='opacity-65 text-sm xl:text-base'>
                  개별적인 대화가 필요할 때 1:1채팅을
                  <br /> 웨딩토크 앱 내에서 하실 수 있도록 마련
                  <br /> 해 둔 공간입니다. 원하신다면 대화 상대
                  <br />의 프로필을 확인할 수 있어요.
                </p>
              </div>
            </div>

            <div className='flex flex-col xl:flex-row xl:gap-6 gap-3  xl:items-start items-center'>
              <Image
                src={'/images/users-wm.svg'}
                alt=''
                width={33}
                height={44}
              />
              <div className='flex flex-col gap-4 text-center xl:text-start'>
                <p className='font-bold xl:text-[21px] text-lg'>소개 카드</p>
                <p className='opacity-65 text-sm xl:text-base'>
                  당신의 마음에 종을 울리는 이성을 찾아
                  <br />
                  보세요! 나이별, 관심사별, 뱃지별, 애완
                  <br />
                  동물 여보, 흡연 여부 등 이성 만남에 있<br />어 고려할 수 있는
                  항목들은 알려드려요!
                </p>
              </div>
            </div>

            <div className='flex gap-6 items-start'>
              <Image
                src={'/images/share-91.svg'}
                alt=''
                width={33}
                height={44}
              />
              <div className='flex flex-col gap-4'>
                <p className='font-bold text-[21px]'>이런 기능 원해요!</p>
                <p className='opacity-65'>
                  웨딩토크에서 원하는 기능이 있다면
                  <br /> 의견을 남겨주세요.
                  <br /> 회원님들의 의견을 수렴해 더욱 성장하
                  <br />는 웨딩토크가 되겠습니다.
                </p>
              </div>
            </div>

            <div className='flex gap-6 items-start'>
              <Image
                src={'/images/video_meeting.svg'}
                alt=''
                width={33}
                height={44}
              />
              <div className='flex flex-col gap-4'>
                <p className='font-bold text-[21px]'>뱃지 기능</p>
                <p className='opacity-65'>
                  여러분이 가진 매력들을 인증하시면
                  <br /> 뱃지를 수여해 드려요. 프로필을 잘 꾸며
                  <br /> 주실수록 더욱 다채로운 경험이 기다리
                  <br />고 있을 거예요.
                </p>
              </div>
            </div>

            <div className='flex gap-6 items-start'>
              <Image
                src={'/images/opening-times.svg'}
                alt=''
                width={33}
                height={44}
              />
              <div className='flex flex-col gap-4'>
                <p className='font-bold text-[21px]'>모임 기능</p>
                <p className='opacity-65'>
                  허심탄회한 소통이 가능하도록 했어요
                  <br />
                  24시간 모니터링팀이 관리합니다.
                </p>
              </div>
            </div>

            <div className='flex gap-6 items-start'>
              <Image
                src={'/images/card-favorite.svg'}
                alt=''
                width={33}
                height={44}
              />
              <div className='flex flex-col gap-4'>
                <p className='font-bold text-[21px]'>낮은 비용</p>
                <p className='opacity-65'>
                  다이아가 웨딩 토크의 재화이며, 5다이
                  <br /> 아가 3천원부터 저렴한 비용으로
                  <br /> 측정되어 있어요.
                </p>
              </div>
            </div>
          </div>
          <div className='w-[161px] h-[1px] bg-[#D8D8D8] mt-11 xl:mb-[100px] mb-5 opacity-10'></div>

          <div className='px-4 py-8 xl:p-0'>
            <p className='xl:text-[32px] text-xl font-bold xl:leading-10 mb-[32px] text-center'>
              웨딩토크에서 결혼상대를 만나보세요
              <br /> 회원님들이 남겨주신 생생한 후기들
            </p>
            <div className='flex flex-col gap-4'>
              <CardReview />
              <CardReview />
              <CardReview />
            </div>

            <div className='flex justify-center mt-11'>
              <button className='text-[#68D585] xl:text-base text-sm flex gap-2 items-center font-bold'>
                Read more reviews{' '}
                <Image
                  src={'/images/right.svg'}
                  alt=''
                  width={22}
                  height={22}
                />
              </button>
            </div>
          </div>
        </div>

        <div className='pt-[60px] bg-[#F4F7FA]'>
          <p className='xl:text-5xl text-2xl font-bold text-center'>비용이 걱정되시나요?</p>
          <br className='hidden xl:inline-block'/>
          <p className='xl:text-[19px] opacity-70 text-[#161C2D] text-center'>
            결혼 중계와 비교도 안되는 비용으로 이용 가능해요
          </p>

          <div className='flex flex-col items-center xl:flex-row xl:gap-[30px] gap-2xl mt-11 justify-center xl:mb-36 mb-11'>
            <CardPrice />
            <CardPrice />
          </div>

          <Image
            src={'/images/Wave.svg'}
            alt='/images/Wave.svg'
            width={1440}
            height={92}
          />
        </div>
      </div>
    </main>
  )
}
