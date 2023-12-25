import React from 'react';
import { IconProps } from '../types';
import { defaultSize } from '../constants';

export function Anaconda({ height, width }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height || defaultSize}
      width={width || defaultSize}
      viewBox="0 0 128 128"
    >
      <path
        d="M24.473 90.629c-2.543-2.793-4.649-5.078-4.684-5.078-.035 0-.062 2.187-.062 4.855 0 4.313-.012 4.867-.118 4.969-.168.168-2.375.168-2.543 0-.105-.105-.117-.914-.117-7.816 0-7.54.004-7.7.14-7.774.079-.043.286-.078.462-.078h.316l4.602 4.895c2.531 2.691 4.625 4.894 4.656 4.894.027 0 .055-2.101.055-4.672v-4.668l.16-.117c.238-.164 2.289-.164 2.523 0l.164.117v7.653c0 7.324-.004 7.664-.132 7.777-.082.074-.262.121-.465.121h-.332zm29.914 4.973a7.964 7.964 0 01-6.508-5.86c-.23-.887-.305-2.273-.176-3.176a8.032 8.032 0 013.113-5.242c.645-.492 1.942-1.125 2.7-1.324 1.875-.488 3.863-.328 5.504.441 1.023.48 2.132 1.336 2.132 1.649 0 .25-1.488 1.781-1.73 1.781-.098 0-.348-.137-.555-.3-.953-.758-2.137-1.13-3.406-1.067-1.344.062-2.258.473-3.238 1.457-1.121 1.125-1.676 2.805-1.453 4.394.175 1.239.613 2.11 1.507 3.012.965.973 2.055 1.422 3.442 1.43 1.164.004 2.039-.285 3.078-1.008.254-.176.535-.32.625-.32.242 0 1.73 1.523 1.73 1.77 0 .32-1.004 1.14-2.027 1.656-1.379.695-3.129.957-4.738.707zm15.082-.008a7.918 7.918 0 01-4.32-2.188c-3.067-3.035-3.137-8.05-.16-11.207 3.093-3.277 8.331-3.304 11.48-.062.695.718 1.101 1.304 1.527 2.203.957 2.023.996 4.43.11 6.562-.333.793-1.04 1.832-1.688 2.473-1.824 1.809-4.375 2.621-6.95 2.219zm2.57-2.918c1.773-.457 3.211-1.895 3.7-3.692.195-.714.175-1.925-.04-2.629-.289-.937-.633-1.503-1.36-2.23-1.066-1.07-2.136-1.527-3.581-1.527-.633 0-.918.035-1.352.168-1.62.5-2.863 1.668-3.449 3.242-.293.785-.363 1.992-.172 2.863.45 2.016 2.184 3.598 4.317 3.942.39.062 1.457-.012 1.937-.137zm17.188-2.086l-4.66-5.113-.02 4.87c-.016 4.41-.031 4.887-.137 5.008-.11.118-.254.133-1.281.133-1.059 0-1.168-.011-1.3-.144-.145-.145-.15-.246-.15-7.746s.005-7.598.15-7.743c.105-.109.237-.148.491-.144h.348l4.598 4.894c2.527 2.692 4.625 4.891 4.656 4.891.035 0 .058-2.098.058-4.664 0-4.426.008-4.668.137-4.785.11-.102.313-.121 1.278-.121 1.046 0 1.156.011 1.289.148.144.145.148.242.148 7.742s-.004 7.602-.148 7.746c-.102.102-.243.145-.473.145h-.328zM.219 95.344c-.078-.082-.145-.176-.145-.215 0-.09 6.91-15.035 7.051-15.25.14-.215.61-.242.781-.043.14.164 6.996 15.152 6.996 15.3 0 .06-.058.165-.132.231-.11.102-.313.121-1.27.121-1.016 0-1.152-.015-1.316-.144-.114-.086-.395-.621-.758-1.422l-.578-1.281-3.352.02-3.351.015-.594 1.304c-.438.961-.64 1.329-.774 1.403-.132.074-.492.101-1.297.101-1.02.004-1.128-.007-1.261-.14zm9.5-5.18c0-.129-2.192-4.867-2.246-4.855-.055.007-2.207 4.746-2.211 4.863 0 .031 1 .055 2.226.055 1.227 0 2.23-.028 2.23-.063zm22.48 5.246c-.07-.043-.125-.16-.125-.265 0-.235 6.903-15.215 7.07-15.344.133-.106.516-.121.66-.031.137.09 7.028 15.175 7.028 15.386a.31.31 0 01-.14.258c-.083.043-.633.074-1.278.074-1.07 0-1.14-.008-1.316-.164-.102-.094-.43-.715-.746-1.426l-.567-1.257h-6.668l-.617 1.328c-.46 1.004-.66 1.355-.797 1.426-.226.113-2.312.125-2.504.015zm9.442-5.273c0-.145-2.145-4.82-2.215-4.828-.047-.008-2.239 4.789-2.239 4.898 0 .012 1.004.02 2.227.02 1.734 0 2.23-.02 2.227-.09zm57.402 5.242c-.11-.11-.121-.762-.121-7.672 0-6.922.012-7.559.121-7.672.11-.11.422-.117 3.379-.086 3.504.035 3.605.043 4.758.457 2.218.797 3.988 2.578 4.738 4.77.312.91.398 1.46.394 2.57 0 1.176-.152 1.934-.601 3.012-.8 1.926-2.598 3.601-4.598 4.285-1.11.379-1.234.39-4.691.426-2.953.027-3.27.02-3.379-.09zm6.402-2.711c.29-.063.809-.25 1.149-.41.5-.238.734-.41 1.21-.89.657-.661.946-1.118 1.247-1.981.191-.54.207-.664.203-1.68 0-.992-.02-1.152-.195-1.68-.508-1.511-1.512-2.558-3.004-3.129l-.594-.226-1.883-.027-1.879-.024v10.164h1.61c1.203 0 1.746-.027 2.136-.117zm7.79 2.668c-.083-.086-.137-.207-.122-.273.07-.247 6.953-15.102 7.059-15.227.066-.078.21-.129.375-.129.168 0 .312.05.383.129.136.164 6.996 15.16 6.996 15.305 0 .058-.059.16-.133.226-.113.102-.316.121-1.27.121-1.015 0-1.152-.015-1.316-.144-.113-.086-.398-.621-.758-1.422l-.578-1.281-3.355.02-3.356.015-.594 1.304c-.43.954-.64 1.332-.77 1.403-.128.074-.495.101-1.292.101-1.035.004-1.125-.007-1.27-.148zm9.503-5.172c0-.125-2.187-4.867-2.242-4.86-.055.008-2.207 4.75-2.21 4.868 0 .031 1 .055 2.226.055s2.226-.028 2.226-.063zm-60.054-19.2c-3.395-.323-6.442-1.331-8.875-2.937l-.512-.336-.121-.953c-.137-1.054-.281-2.738-.281-3.289v-.363l1.59-.012c.874-.008 1.855-.039 2.18-.074.515-.055.616-.047.8.07 1.734 1.086 4.379 1.809 6.629 1.805 3.605 0 6.797-1.332 9.367-3.906 1.137-1.137 1.762-1.992 2.445-3.352 1.875-3.719 1.918-7.976.114-11.699-1.786-3.688-5.266-6.395-9.243-7.188-1.027-.207-2.437-.316-3.285-.253l-.687.046.175-.246c.098-.132.735-.816 1.418-1.515l1.247-1.274-.512-.476a32.162 32.162 0 00-2.473-2.063l-.64-.472.242-.059c.476-.113 3.261-.078 4.258.05 8.19 1.071 14.726 7.02 16.503 15.02.579 2.617.594 5.512.036 8.219-.704 3.418-2.496 6.785-4.985 9.371a19.392 19.392 0 01-12.176 5.856c-.77.074-2.601.09-3.214.03zm-12.118-5.558c-1.097-1.097-2.582-2.875-2.48-2.976.02-.02.434.047.918.144.742.153 2.402.403 2.652.403.04 0 .07.312.07.714.004.653.07 1.59.188 2.555.035.274.023.383-.039.383-.047 0-.637-.55-1.309-1.223zm2.329-3.918c0-.586.152-2.34.21-2.398.028-.031.258.222.512.558.258.34.836.98 1.285 1.426l.82.809h-2.827zm-1.497.27c-1.222-.149-3.707-.625-3.902-.75-.062-.035.012-.328.254-1.031.32-.926 1.078-2.739 1.195-2.868.032-.03.43.141.887.38.461.238 1.125.558 1.48.71l.649.278-.047.336c-.102.777-.184 1.832-.187 2.394 0 .328-.024.598-.055.59-.031-.004-.152-.024-.274-.04zm-5.312-3.145a20.71 20.71 0 01-.938-3.226c-.222-1.121-.218-1.13.48-.578.321.254.938.699 1.368.996.434.293.785.543.785.558 0 .012-.136.317-.3.672a37.319 37.319 0 00-.63 1.485c-.18.464-.351.867-.382.898-.028.031-.203-.328-.383-.805zm5.254-1.886c-.563-.258-1.578-.778-1.719-.875-.027-.024.723-1.258 1.106-1.82l.3-.442.051.219c.336 1.402.535 2.113.746 2.632.133.34.242.618.239.618-.004 0-.329-.153-.723-.332zm-3.824-2.196c-.79-.55-2.106-1.586-2.188-1.718-.078-.13 2.606-2.731 2.817-2.731.03 0 .324.344.644.766.324.422.754.96.957 1.191.207.234.371.441.371.461 0 .02-.258.418-.57.89a24.64 24.64 0 00-.813 1.278c-.129.23-.277.418-.332.418-.05 0-.449-.25-.886-.555zm-2.73-3.5c.01-.918.32-3.008.624-4.21.3-1.188.238-1.18.785-.098.266.52.625 1.191.801 1.488l.32.543-.554.473a35.78 35.78 0 00-1.266 1.175c-.39.383-.71.668-.71.63zm5.874-.242c-.578-.687-1.265-1.64-1.23-1.703.05-.078.902-.656 1.593-1.082.465-.281.5-.293.454-.137a19.74 19.74 0 00-.48 2.43c-.044.398-.087.734-.095.742-.011.012-.12-.102-.242-.25zm-2.535-3.66c-.758-1.316-1.633-3.207-1.531-3.3.164-.153 2.941-.93 3.761-1.056l.32-.046.16.976c.087.535.235 1.29.33 1.672l.17.7-.6.343a26.9 26.9 0 00-1.407.879l-.8.535zm4.488-3.02a34.149 34.149 0 01-.215-1.234l-.062-.41.371-.043c.207-.024.77-.067 1.25-.094l.875-.047-.3.32a14.185 14.185 0 00-1.423 1.797l-.343.528zm-4.898-2.675c.5-.844 2.074-2.852 2.613-3.329l.156-.136v3.07l-.64.125a30.82 30.82 0 00-2.168.527c-.13.04-.125.02.039-.257zm4.465-2.477c.011-1.008.039-1.852.062-1.875.086-.082 3.504.602 3.633.723.012.011-.09.394-.23.851a33.966 33.966 0 00-.38 1.387l-.128.555-1.028.047a31.06 31.06 0 00-1.492.093l-.46.051zm4.879 1.5c0-.035.293-1.082.445-1.602l.144-.488.891.367c1.184.485 1.156.47.895.578-.618.258-1.637.75-1.95.946-.328.203-.425.246-.425.199zm3.289-2.937a21.682 21.682 0 00-1.254-.555l-.778-.313.079-.215c.093-.277 1.164-2.421 1.363-2.742l.152-.238.457.309c.598.402 1.696 1.222 2.059 1.539l.285.25-.762.87c-.418.481-.844.977-.945 1.102l-.184.23zm-4.785-1.692a45.856 45.856 0 00-1.426-.34l-.477-.097.645-.38c.355-.21.883-.503 1.172-.648.562-.285 2.257-.984 2.293-.945.011.012-.118.297-.29.633-.171.34-.44.91-.601 1.273-.156.364-.305.676-.328.7-.02.027-.465-.063-.989-.196zm0 0"
        fill="#3eb049"
      />
    </svg>
  );
}
