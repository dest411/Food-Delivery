const Hr = () => {
    return (
        <div className="my-10 w-full max-w-[1500px]">
            <div
                className="flex h-5 w-[150px] items-center justify-center bg-white"
                aria-label="Zigzag Pattern Container"
            >
                <svg
                    className="h-full w-full"
                    viewBox="0 0 545 44"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polyline
                        points="0,4 54.5,40 109,4 163.5,40 218,4 272.5,40 327,4 381.5,40 436,4 490.5,40 545,4"
                        style={{
                            fill: 'none',
                            stroke: '#E5EEED',
                            strokeWidth: 8,
                            strokeLinecap: 'round',
                        }}
                    />
                </svg>
            </div>
        </div>
    );
};

export default Hr;
