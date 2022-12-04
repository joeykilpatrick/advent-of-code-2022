import * as _ from 'lodash';

const rucksacks: string[] = ["QLFdFCdlLcVqdvFLnFLSSShZwptfHHhfZZZpSwfmHp", "rTJRjjbJTgzDJjdsRsfwtfNwtfmZpZNhmmzt", "bMdJjsjglnVMFCCc", "BZvZMBBBMTtZTgcCPdgtgQCrrV", "VspNDDpsGDGnRmRpRplQdrrPcPCjgDCcPQCQQj", "RVnsmspnpwFRlHGRwHHlnRSThSSvBTbFTZMqTMZMTZFh", "ttffrVJWtWpgtQnZGVnNSLTHSZ", "jRsjjmhdRcjcRsFcdwGLMZSnHMTSMNZN", "RjczlvjhPCcPjcvRpbglWplJBblqrGgq", "NwCWwdNQNDCwGpWNQwmJtZgPZrdJgLZcPhLddr", "blqpnFTqrLbcLPtV", "MnjqSSpqlFRvSqNDGHvWHQDwfWmm", "jfLljlQhDLmlrMJQtJTJrQqQ", "NpBbjjsdMCgCCMrb", "dwspwGnSHHGsGzDDlFDjVWjfZWnP", "wQhTZwvpZFZdqWLnnwSrWC", "mfDmMFlDcPLdgDSCLCqg", "PmzclsMclMlFsHHsJZFHpT", "LfLJWNdJnBLfhndfWdZqcgDZgSqgCCSSSLDF", "bQVQmrrjPqQDZSZBCQ", "RRtGjVmRsPbPrrnNNpNHHnBnpHns", "PfbGNwGBwNcPTbGNQFBVjsjztVztVjHV", "hrdCJhmlJhZrLDRmghrmDrzqFsbgtbHqnznzznQtbjtz", "WdZdDJCDmrJmLZrLDLDZlClcSccwSPbNPfSNWfGNNWMGNc", "QwrnTSgqgFShSdfHPdbS", "BGdjmMmZMvfhvCZZPf", "BzGmzVGGGzmzGpVBtdnQqqdTQQDDqrpR", "PPRPwLQlLtbPmbwgJhrSssNlhhrgsZ", "fFTdFvTMNfzVnFqdnjgSSjjsSjhghpJs", "dvczcFzNTWVWMFLcLbQQwmbHLCLL", "HhLLDfMmTjsjmLmhsmmfZMjGtpGJtdcvnCWtZJcWGddttW", "gwrwwgzwgDpJddrJDr", "SBwBBbgVsVmRRhDM", "SZdmfdZRTQZTQgHVVGGRqZdVCjCcNCNcJRWcCBbJjCPCsNsc", "FnhzMMhDDFlzlnvpwMLrMDCsbcjNJbcJbBcBfPhCNbWj", "wzwnpDDnLvFnLlttLrzGgTVGQqZtTqSqSdfZTg", "FJJWWWrCGWdmzFlTVqqlMhmvVlNh", "btpgtfjZjjhgggrNMThl", "DpwpfRZDZwwfwjsnjfsZnnnwGcCRCHcCCCLGHLWcrcFCWCHW", "ljHHHBtjQthchhZpqqNt", "FTmJnPFwzlJPmzTgTgbFwJbMCpbMchhhqbhWCDMDhZcppM", "JwlFGwVGnFFGBGjdSsfdsG", "QsvpGhjGgswvjjwjjjvPpThJfLZCCLCSSLbFLStCFCSgtH", "mDrzdzMqqnMrDMmZnqnzNVRCStlCHFSCtJqlCLFCFLfJfJ", "mBDzNRWBDDMBpGsZcGZWGjPp", "SlLQhQsvvttFlWsWcfHHMTJfwSHwTfTf", "VZmmrRDRfpTHJcRf", "jzBnDDgjPchWlsQsBW", "LTLVdTSLNTLnTSnrWvdwswsfmJwmwGsffH", "FbgCbRRppCpPbgMcZvCcGftGGltwHwGtplQQsfJw", "CRBMCvZZRgMgBbDCPcDrjLzWLVrSSzShSSNrBS", "hVJJjhjRVRZjQvDfBstsBVNBdwstHsld", "pCTCcMqCThTFLFFPWcWSPHtwwdmcBHHmNtHdmwmwBl", "rMTCCWPLLPCMFhDnDrjzRrfDJD", "pqMpCvMchvFNWSBdVNqQ", "zDRJJDGJJtNtmGRRWVdFWWVdSfjb", "DDJLmnJmzwGmGLTPhTCNpgcrpv", "cpPpbPWVprWcbJrrwpCwwdWrvNNFRqzNnChgqFzFnZvqFlzq", "fTtHLfSHSsNDGLSmsLvnhFqzhzlzDhhvRlFz", "mSMLHTQTmHMSfBSMTPdBJJNNVddrVrbjbJ", "zpCpBTnFgFbncznbblzdhRswdlJsLllJdw", "QqqmtWVPWvHDVmqDhjsljwRhlZldhRMQ", "tWSHDmVfmrtPHVgGRRbgTRpSgpTc", "ssTbzFRtPRwTFZtvbPRMhndBqMMvMBHJnnHMMd", "WQVWzlGWVBqqdMQJMq", "pVSpSSgLfjDzWrLGWWjDzzfLtbRFFNtPZRssspsNRZcRsNZb", "jnPzzGlnnznWnzhvGnnpVFrZmVFcgjrrmZRFtj", "fsbgTdwdqBbfwCptVtdZRcrRCp", "gsMbgfHsBSwsGhhJWMLnWPPJ", "bpmbJpNbbbNGGmRJzJTsfdsvsNdglfhssCvC", "hWLwQjZjLhjHFFBLZldvvflrvtfjCrfjlT", "QWVQZZFDcDJJhJJc", "RmRghgRlNgfGGRmdGqhsgsZFZZpBvHpZppHcgH", "tbLCDLnLtSbbbjtPtMLtDPTvHHBpcHcsHvTcHsmZcF", "rSLrMJzDznzGmhNlVwdrRr", "vWjljMWcnSSpjmzbJVzJrTCmtGJV", "NZDDQLRqPJrPzrprTC", "gqDqqwpdHWhlgnjH", "ccptcpstDvbNvHbLNRZZ", "dFjhdnjQFJlFCQSjgngJPJgWWrRNWNRtNCzrVbRzNVzZZL", "PhThFSPPSpsmTcqMwt", "cLcLlMhGMGcpGzslHFHFvnHlBDvWbT", "VHdQwqPJdPwjJPdPQRrmjjjQnTFrbvNWFFffDvbvvNDvbBNN", "RwRJCHmmdQJZZLzGphcCtz", "hVvFVjvjVWmFRQVZqTpqtwQpwpqZfp", "gvDlSBDJSlPLcLdDwzwtptqTTTzwcCCt", "JgrJGbLgvnWsmvVr", "rwmqqRqrnHQGmnjCCqCzdBzCBJBz", "hFLgbWWPWmvtLhPtgpcdjJdcBJdpJjDsgp", "lvfhSSPWtTNTTZZmfr", "bHDDssRHsjNMbJjJLQJsbTtGvSCzCGQCTzGvSqSBzT", "mmVrwhmmpfPStnTSBnhStG", "pcwrptZcgFcmpgHRDjjZlDJsjbbD", "JJRrmFqJMdFFJMjjJcqGgzSCSHSCscPCHPHGZc", "VWpWptnvSmpPGCHC", "vQnDLBmbntvLBbnlldTQFlJlFFrNRd", "LPDftnHFQfwmBcBGmc", "CVqRsdqvdrlsCVsNvqwwSpTNSSDSDDBBTTSN", "lqlDRddjbblRbRqrlRRjsbvghHHnPQWjHWQWZHPHWZhFnP", "bwQsDcgsJqcsDpcQRQnpqtVSVvgSMMMfMvfVBVfdvM", "CGZFrHHPrTZNGGZZHmCZHlVfjfzjSfzBtBBNSBVjvntf", "ChrCCLGrTlhJnhDncRbp", "nmFnhfTQjSzfjddZWsRRRFRFGl", "HDgCwgtQbZlHsrqHHr", "cJPCgCCPbpbgDMPvMQnjmnhTfmzLpQQmjz", "QFHSQdNMCSgcSgFtttPNFJpCpnTjZlbblpppZplZjz", "LqLsWMRRfrrWMmMGpbTnbppbZnTjpnmm", "fWBrMqWsGswGfGRMMwrLgtPPdNFBQPHNHNPPcFPP", "dngbSppJSSppbVMZQQMjqfQQgwcl", "TWmSWtvCRCWjwfjqQqMstq", "FhFvRzSTNmhHnVPhGhBJdBpB", "gcHPgzGmPPwTsSTsbwbdWD", "QjBLLfVhhBqqBFQLrLjVFlNpNDtsSWTDdNptdbqbdS", "jCMFLVjFBFjJJLFFMVBFrLnvPzHRmHPGnGWWcCvzHRZm", "PDPqWWjhPpPbCsjwjTVbLT", "SrtCttGRMddSVwHFSs", "JtfvttmrGMRRJzJCqhqqqWQZhCNgJZ", "ChrCVFQCVQlwQNwpQcmmcjmWBmddghjjdW", "sbDTZStTqqfSBggPmWjWWNsL", "THqqSHDTtZTDTHZZbHTzRzFvlFCVprFprQVnCzNppQrz", "PdfWCwMWjPSrdgCMnnlGsGQvvpJZvFGnps", "DmBhVBLbbVqVBzTRLBRzzTLNNpRQNNZQZppZvlQpZvllvF", "zVDtVHBbbTbzDbrjgWjMPtMWPMlj", "JLsTTNDsgTMNvDQpLpGpLGNJShrfzCFnSnSrnfzCfTFhWrfw", "ZcqrRddHZZVRfzWnVWCzWFnn", "tZHZtrHHPdRtdHlcccQggsplpJDNvMGNGMss", "cMCLfStfMTCjPMPcGzjftMbgsRNmRgmmGsmnJbNJbghJ", "QHVVWrFFWZNShHSgbSJm", "qZwwrrpqpZpZFvqrQdFlQVSwLBMBfTTLTjLBCcdTMzMftPPB", "SwsdBTvgvJLPNptpCpCmBDtn", "wffrzwGFWFNZWpjWZnNm", "zrfflbRwJPhbPbsS", "HjHHRtwjnjRblQRttHwQGvGWNNBWvqGzfTvfNN", "FmScCcrsdVZrpBrVcCVFzffvzzmWGLWgqWqgGWzW", "SFVSDDBdsdDSJhnjJltJbPtHRM", "FjGFVqWrzQFlQrZzGQzFLTvfwwTgMnvcnbRMLRdnfb", "CCttSNsSnRfgncSg", "CNspmDBPtPmJJNBJPNpDhQZVzQlhqrGZflfVjQFrQj", "dNNdHWcmdmPPptmmWHpPTFFjJPGrQsVsPQGGGJVDrVVGrS", "MhZlZhlgflgfnfDtjbjJGbtnVtGS", "LtZqlzhzqMZWHHLwdHmFWp", "llNRlfwWRwwLlwFNNgRrVCBjdjCVdjpWjtVWCD", "HTQqzPqzQPmhhmSPznSsssJtdnMZddtMCjprtMjCnBVnjZ", "PzHQmqsGSJPSmQqPbfwNcgNbNgNfBGwR", "lPdzlZPzQzMZQGQrTZvvpjHTTpfsTTZb", "zRShhtWRnqnqSNRnDTTHvfNJspNsLpTsjL", "hBVncVtDSnhDnDBBtGrlzwmmMlGmVrMdrP", "HPTZVHVPlHDPlfgnjJFdJdjPjSPqCS", "hLRRBhwGhqbtmsRSSSjjdMJjnJGSMj", "QrQtqrRrcQDgVglc", "ZTwbbZdchZZjmVWHTrHWBVJtBB", "glslCDqLLDfGRqlsgLssfrCHBHFHmrHBBppFmCJWWp", "fRzvvvgGgNSNvmQbSQ", "qPGGPwCTqTzHCvPGqWdLFLssLpstLLspvd", "njJchhcbjbDrbcLNlLrpWWrLLHgp", "DQhMMMJQMQJnVbbnRHSMPwZmGZPZRTRCwTZmZGwz", "zzGNfPbcgdPqLrqvWWVzMq", "DGmJtnJTJRhhJMhCQqCLCLrrLM", "ZnHDtSZlTBHnBdccGSfGcwjjdb", "FpZDpQZDvMwZpCCMdCBPpJGPPLgJGGLffJJL", "jlbswNrlPPJJfGlf", "bnNwqbHnNwRSrqhbdCcmHddQzddFDdvZ", "gbQQQngWPVVtvvPQNVNvWWSHGwDsCCmDtHSlmrssDmHs", "fqhMLFFMMZqZMRZqMjRMqLJSCdFlrrldsDrCsDSSHHGCSC", "MJRZLZLGMcTqczjNPzNnzPvWBVgNnP", "gqdbBffTvlRHbwLl", "nMMQJQpGdsFpQsJzNMRLLDlmLLmjFFmLjDRF", "pzGMnVcMBfTdtBBV", "WSbfmrrrrWdbWmdfDSSStmHjtMtvCLVnqBHCVGtVGnMM", "lRcgFRZhJgnMLjvGgv", "lcvwTcFTplvwphzcTTJTbsdsPSPDdbmzmDSWPsSm", "bbdTjTQTQMsZNqqhJrZslg", "jFGVjwfCPVGfwjCVqWhWZFgqWrglllNN", "PjfSPzRBjCCfSBCGBLznTndHcdMLbMmmdT", "wSVMJSVccdGwGnsgbVTTbRsCRNgN", "rHjhHLmrhPJrqjNTRDgBbbRRRs", "zqmPPqqpPLzltrMdJcZpfdpGWWJJ", "ZhrBBJGrgJhGHttGGVPPcPPF", "cnzLqNssfRnpfWqsLfcfWQNMbMVPDtnDtbHFtMbPtVPFFM", "jfqzCCLsWQLcjgldjmljmgTd", "wghGSSGZPVwgqtwtwCCtFFMM", "BvbspnBznvvWHWHHHbCQptQFQlFcqMClqLLq", "JWzzsJHWzfWjJrvMBWHBBGDmVDrVhZmmgSPSmZVVrh", "ccRMJRsjjgJgcPCSCCVCwsSWVNzp", "WQQqnmrBWtqWqdSbVwwBSpbbCSBB", "QvDqmqqmgWPWjPvW", "msqpjDWspRWwvFvDWWhnbbJfPzFQblJJPlnz", "gGGrMTgLVBsBBLdsVTrSCBffHQfdHhnbPPPPffndlbzh", "ZCVsCGSScsLZpwNpqmZRqW", "PPsGmJPVPQPZmsQCVPJPnPCMDcTcdqDDTqvFhvnTjRDTDchq", "BdrtzNBLHStHrdrlwfNThvFhcvbDccThjbFBqq", "SSgdHNfSHHgzLHtLNWSPQQPMQVpmmppVCmQZCW", "pPssrWWLdndHPJdd", "QNQFTLNBFTzzgjfGTjffFNZjCSGnHDnSDJHnDScttDCcDnmd", "FVzVLZwZZgswqqrbphbR", "VpWCZjCwWnppZpqnhNjjNZjFLtLzQJHdHLQRzWLRzRztHJ", "DMGPmPMgTSmsgQzRFbdHRLJgdn", "csDMPMGDDvMSSPnDTvrDChhwljlqNNjchNCjNVcf", "WpGGmbSGpVWWpjMMTNdfCFNdFfRNwNSF", "JsQztzrvrJqsTTRbbvFBhhhv", "cLrDqLccsLqbDHGpZWDHgjGlZW", "QGMQJMmsJmMCmmqjsRvLvvdgvgVvDVdD", "BDcrcNbNppwTpzRdvvchhFvfFv", "plBBwWrbpQHDjGmGJl", "mzFlTdmSDzrPvCJqqDVVNC", "hfRmhgjRhnfwnRHcnhGGvPJQPvvfLfQvNLGv", "BhhnjMgRWghpwjRWMRjrZzdbSbsdstTrltdmMs", "bLLnbqjpvplnDvNlqpqBWJZSdPJCNdJJThhSPhTd", "HFwHHQMMFHGzGwRPPJPTWthTZtJSQr", "mfWMHFHWHmgmFcwGwwpbDljqjBDcDnLcVnlb", "wBrWBwSWRJMBwdZnPQPgFnwGVF", "fLjfbsvDDfvvqqGqZGqmPQgqTGGG", "vZLsjzjjZCzJWRNSBR", "jTRbRHHqPqTRBHqdjhgvgghhZQdDvvgvhC", "WLWWzzFszsmNFGWSFmMrpghCtZvhlQNDgQCDgctC", "FJsLsSrDmsFSDLWrzJmmMsGqjRBVbJTBVPVBbBqRjPBjHn", "QbwwnDDQDcDfSbDbfhhrvrCtJMvJSCvvJh", "FWRjjLjmdZWdWNBFNWNlNQQrMGvvMGgssGvQRvrMJs", "BjWdlBpmdmBWFWdpWfPfpVnVwfHpqPQDbq", "SqrvlMldqvSWdGPTGzWpWpzpHP", "tRwmhtbsRRFsLwGGTVDHppTNdbVp", "FRCRQdCFtCLmBhCcmmQdhFdCvnfjffjZlZnjSnvfcSrrgMgn", "GQQtNJQWWcqPPhMMtwqD", "WpWLlBWZCvhjwMMZqDDP", "WgvmLVmHCbpppLgdllHddvCmFGzGnfsJJQJsJncSsccFVffF", "HcSsSlTTvvPPWWNMWWgPTPPbGbbrwJQbrrDphrHJJRpRhp", "ztfLqqzmRwDGlLDb", "fdVtmqjdZBmSvjsPSWlTgv", "DPvDhhMRRMhRNDLPMNsbwHwrjgnddqddrWdPtHzr", "pcBGSpcVBfJWCcmJGGwHtzgrrtwqzdrtrngG", "mllBlBZmMlQWRbQv", "SGZBSFMZllJWmzvfpp", "NTqbNrhHNHWgNqHrNhNQbbjHJLcnfnzLLnLmfcfccJcfQLcL", "HggbTNRRTHqqbVSGMSZVWDMDwVPs", "SBsSlvbPlFPvRlbPsMFZLgVLrLsJVgzrCJfVCH", "jcNddNdGzZrVgNVJ", "tTGwdcmWGdtwQmwmwZdwSlhBPbhPTBFRhlhSMFMR", "RzStzTzzvvQvSHVvhVgBqMMFqhPM", "ddlLLwNVLWLjbbLrjrbWrwmlhcFmBGgFMMPgBcGBBqPhggMs", "dLwdVCVWWdfNwNwLrWrbfbJNptzDDHRnHptHtznHTppnQCtR", "RzcfMBHLzpDQFmnDSWNB", "dbqjtjVqJZZGjPGJCPGbPndNNDglrmQmNSDgSlSSng", "hjCTqhCJbhVCGNvMcfvhfRLhvchz", "sDDqDMtqshJhPvhhCpSCCWlZHSWp", "bffRcbBGGTwGfGfbNjgSHZSgWwplHCClZZ", "RTQBbcnbRNmGbGTQLbmbJVqLllsDVMsPDVVvttMd", "nbLBjnqwgfRRBgBwnllbLlwScvPdZPcScZPcdFZJPvZPvcMZ", "tChQpphHrrHztssZdcDJcPZcMvWv", "hpTHVMQMtQtVpzBfwjfRnfwfnjVl", "ljJlvvJQlrlcJcWpPzgthnPnzMgpgSpC", "smtmZBmHZTVttHmqFqmzCSZSdndzShPNgPShgP", "bVqFHLqLqfHHFwbBLHcwDQrDrtjlQvGjlRQQ", "pwhVsPvVVCFtmhPhzqGqqZMZvGTTTMlGWM", "drrrrDfDRrNQdQdrRrBdjGWqWqWlGlGtlGbGZGBTLc", "tSDfgnHrdDtVSPSshJCSPh", "WlWlDqhglLhsdgrcbFdJJpPpdBbB", "ZQZvSvzRMSzjZjvZmMMpbFPQFVBrVbPcpbJFLB", "SwGZmjvCRSMRjMzZvRnstHftNfswHsflLhNWHf", "jsprCvGRQrtjCsQrGsrzvGHhgmHVmHZgggmMGVmhMbHm", "FFFdDSdwSffJWqqMzzMmDVbZ", "LLcdcfcfPwwBzdTTdtvlsrjCtvPvprnsjR", "MvtSqNSWMzjwzFTD", "ZRPlcRpQszNgszNwVT", "bcZcrcPlcPLLLZllPlbcbLSBfWCvHvWWNSmSqNqfWN", "rNdZpMGnddgggwHwzRPCzDDD", "vcvhcTLhZLhLPCPHPDPPVvzH", "LTmBmthWBchWLttttFJFLlFnGJNsfpdjNsnMnMpnpZdssn", "ZHWFCvqBDdqqqCTDHHBWrgppTMhhVpspMPQcSgQVPS", "jblbGffntRwltfMQVrrQscphfg", "ztJrGtbwGztbmtzzRGnRznWNNCWmHHdFHdFNWWHHqCqZ", "WGWSSZvVvqmrmzPm", "NgjtwFFlwDsFghNsMtlcjljcPqrQHcZzQznpQQprnqqzHQ", "tgMCwNhtgbdLZRbZCT", "PQSPQrSGZnGnVFhpVhRRlvLvBDRV", "tjctcjTMMpDTvFTlRD", "JCftsccFCcmsJJGZGGmPHnQrGwGS", "TrjRFFRnpnRCHNFSjSRrffJvJfzqQBsjqQqzzffd", "ZtlgMDhZhgmGDLVZLlGtLPqdQQvvfBJJqzzBPdMzdd", "VlLDgLLDWtGZwgtRNTNrFTqCwqHTrr", "LpcDFDMMPjMLLjpcDGCHgHssGHWnbCBWBHvm", "QfZhrhVVdZThlZlfVvVzZrTbgQnBHsCCHgJBsCsJBHmBmn", "wwtvfZztlTVlhtrzzlLNpFFRjMPDpRcPFwRj", "VzZhhQHQJJWJSSFWDGclbmNPgglPgVGc", "ddBTqCjjBCcrqrCRrwGPGmmDGmbpBGNpNNgg", "CRMjwsjwsLdLRrQFJSvMFMWZcHFW", "JgJJPvtrhRPQQzSRMQFFSF", "BLqsjsdLsMBqblnsGbBqVqdwSQSCSWwNFwczQWCNNwNCHn", "ljqbpLbbdDlbDbqDDVtMttTTgpJJgThhJrJr", "nflndmjbSnlTQGwvWGPHGRGj", "NtstcMcDJMvwgHfFvDgR", "qqqpLrMsLLqLNNnzbrdlbZSrznfz", "ttZCCFjNjnPVCFQPPFbbStrzqzqrrrcwtmJJ", "gTTMRMTWsTGGTddHTTbBzBLSmqbbJGzGmqqb", "HpgpMTvRhHHTRDhMsHdHDRhjJlVPJjNFJnnFpQQVfPCjnP", "VqJVQPpjQqPBbHwldmLfVVmd", "tMGvrzzDGCDDddwLbgLvLwcm", "TWDWCzTZDGMZtzWWtsFhbRRqRQRjhbNQBBTh", "zgLgLHnnzCCvnsHSsZBZBsTRdD", "rslllhJjcQNNGjpWJlSRTRdwBVSSNTPVSdPB", "jGrGqjJfqccrfqGcGplrJpFvzggqmCtMzmsMnvMvvCgm"];

function calculatePriority(letter: string) {
    const charCode = letter.charCodeAt(0);
    /*
        [A..Z] => [65..90]
        [a..z] => [97..122]
     */
    if (charCode <= 90) {
        return charCode - 38;
    } else {
        return charCode - 96;
    }
}

function findCommonLetters(...strs: string[]): string[] {
    const stringLetters: string[][] = strs.map((str) => str.split(""));
    return _.intersection(...stringLetters);
}

const problem1CommonLetters: string[] = rucksacks.map((rucksack): string => {
    const firstHalf = rucksack.slice(0, rucksack.length / 2);
    const secondHalf = rucksack.slice(rucksack.length / 2);

    const [ letter ] = findCommonLetters(firstHalf, secondHalf);
    if (!letter) {
        throw Error(`Did not find common letter in string: ${rucksack}`);
    }

    return letter;
})

const problem1Solution = problem1CommonLetters.map(calculatePriority).reduce((acc, x) => acc + x, 0);
console.log(problem1Solution);

const problem2CommonLetters: string[] = _.chunk(rucksacks, 3).map((arr) => {
    const [ letter ] = findCommonLetters(...arr);
    if (!letter) {
        throw Error(`Did not find common letter in strings: ${arr}`);
    }

    return letter;
})

const problem2Solution = problem2CommonLetters.map(calculatePriority).reduce((acc, x) => acc + x, 0);
console.log(problem2Solution);

export {}
