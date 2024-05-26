
import Svg , {Path , Defs , Pattern, Use , Image}  from 'react-native-svg'; 

 const HomeIcon = () => {
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={25}
    height={25}
    fill="none"
    
  >
    <Path fill="url(#a)" d="M0 0h25v25H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.01)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABWtJREFUeAHtnUuII0UYx2d9v1AUERURRL2I4APEtwdBUPAgSER3Tao6yff/aoKDjBdBWQmIIIKigooeFAU97GVXT4LIgiisCIII4kUQEVFRZAXf44xWZjeTTCad7k53dSf5LzSbnqqu+ur3r6+qq1KpWlriPxIgARIgARIgARIgARIgARIggVQEmsBNxuFFf/nPqR5m5PwI1Gq1Y63Kk1axbhUbR69I8TKA4/PLiSlNJADgbOPw3lERtv9vVD+wnc65ExNihOkJRMDVDeDr7SKM3EO+tcvt66bPkSmMJWBUGxby+wj8gSZrMMxA/rQqD45NkAHZCKysrJxoVV8ZhJ3qM/BGbXX15Gy586khAu12+wKrOJRKgB08JgI+rbfbFw0lzpt0BIzqLUbx/bRi9J9H+yerels6KxjbE9jl236j+LsPc4danzFszTp0fR5EnYBAp9M5zTrsywi7Px6Z9HwEvA3gjAQmLW4Uq3qpAT6fBDOv8AbwZaR62eISjyl55OROq/glL9hJ0zGKX42Tu2NMW7igXVb1YQP5NynEAuKt+2kYPx2zcPQHC9xqtc6yqu8WADhxXzKUt8jBunPnDNq4MJ+tyJUG+GoISH5vUtkEUWwY4Bsrcs3CCOELapzsMYrfqibGgD1/GNXW3IvS7XaPOzJlnrkGD0ArPA0/lV+r1U6YS2Gazeb5DYePQgLNIy+j7U/qwIVzJYpx7kar+C4PQGWkYRx+jFz71rkQxQCwir/KAJlnngbyj389n1lRrLUnGcWreUKpQlpG5K16vX7qTAnj21zf9lYBYCE2AJ8Z4OKZEKUhcodR/FwIiAqMU/rlghy2wF1VFqUKUyCFvwr3BdmsHL0pl263e0ylhAFwilXs32ZsaDjl5SdywDOohCj+OwUr8vHCirHVjB7as7Jyeqmi9BYfiBykGJsL9Rqq75c6srcqT1OMrVWTR1g8VYqXNFSvL/k7jPL6jK1masSGHpMyFujN4rxUMG8W+TCol9jl9s3BChdTG6tsQyRyQzBRIpHXqwyjGrbpa0EE8YMgC/mhGoUe6VBH2vSy7PQzxEEGjC3nLi+rkLOWb5AlRtbJvbMGpix7jZN7Cm+2IofVsgo4e/kG+CmEBfbOHpiS+hpgb+Ee4hcqU5CEAm8u6i5WEwqSUAw/fqIgKWCFGHBSEApSmYFYJfs1egg9hB4S1xfRQ+gh9BB6SMW8gIJQkKGhP0fqKSoEO/UUsOKamrzCKAgF4VtWnDfRQ+ghoT1kze9RYlQe879mirt8HKN4p9TFfHPtIX6lS4bfj0fAtX4FSCmTj3MtyBT7XFnV2ylIXGeXMiwCvhgaDGW48Tv/BBdljj1kfwYNhh75fyuPAxQkpSeMBeawb4huhpsQm6KN2D+3HkJBxlfBUuayKAgFGWl+sjS/bLJiK1LhG2uOiEhBKEiYqRP2IbE1LfzaXgpCQUb6A3bqA1Pp9BB6CD0krkmgh9BD6CH0kPFeEBfCuayBl424SuTDOFIfX5U4/T6p9qQJZ6ceW9M4Uk9amUI0Wcbh0VzeQJIWSrHRcHhzfBVJFuL32w1ttwUeSWbdFLEssDt0wYzK41OY3HvUOjwR2u5I9b5p7Z74vD+ExR8TFLBw603VKyYaNiFCw7mrth9kXGgZIId3Ly+fOcGsfIIjhwcKLcxQc6Yv5GP10pJVeSmc3dLJy+5E6fQ2oUlxLm0GEGsGeMafOZLIoASRfFqRw3NWsZbBnkTf/WweVBNg05mdyns/cJ5VdVb1WX/4SR6XVXneqj7U6rQu2SnPPP7mj+fzefi88rDZp+EZ9Fjw2PA8JGIaJEACJEACJEACJEACJEACJEACJFARAv8B+KlaObwMj5AAAAAASUVORK5CYII="
        id="b"
        width={100}
        height={100}
      />
    </Defs>
  </Svg>
  );
};
export default HomeIcon;


