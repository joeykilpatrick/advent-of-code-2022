class Directory {

    private subdirectories: Record<string, Directory> = {};
    private files: Record<string, number> = {};

    constructor(
        private parent: Directory | null,
        public readonly name: string,
    ) {
        this.subdirectories['..'] = parent || this;
    }

    get path(): string {
        if (this.parent) {
            return `${this.parent.path}/${this.name}`;
        } else {
            return this.name;
        }
    }

    getSubdirectory(name: string): Directory {
        return this.subdirectories[name] ||= new Directory(this, name);
    }

    getSubdirectories(): Directory[] {
        return Object.entries(this.subdirectories)
            .filter(([name]) => name !== '..')
            .map(([_, dir]) => dir);
    }

    addFile(name: string, size: number): void {
        this.files[name] = size;
    }

    addSubdirectory(name: string): void {
        this.subdirectories[name] = new Directory(this, name);
    }

    private getSizeOfFiles(): number {
        return Object.values(this.files).reduce((x, y) => x + y, 0);
    }

    getTotalSize(): number {
        const totalFileSize = this.getSizeOfFiles();
        const totalSubdirectorySizes: number =
            this.getSubdirectories()
                .map((dir) => dir.getTotalSize())
                .reduce((x, y) => x + y, 0);
        return totalFileSize + totalSubdirectorySizes;
    }

}

const shellText: string = '$ ls\ndir cdnhnmcb\ndir dmccnsqv\n290229 dsm\ndir gsszlj\ndir hmw\ndir jhmrn\ndir ncb\ndir npclt\ndir rvvjbz\n$ cd cdnhnmcb\n$ ls\n170937 fsjwz.css\n281758 jmfcfs.gsq\n109017 jwwv.zlz\n295735 tsrqvpbq\n$ cd ..\n$ cd dmccnsqv\n$ ls\n273438 fsjwz.css\ndir jtntzqfd\ndir tqmbq\n211769 vmgpwrbz.nbp\n205895 wqz.qcg\n$ cd jtntzqfd\n$ ls\n4635 wqfvvzth.vdz\n$ cd ..\n$ cd tqmbq\n$ ls\ndir bnvspstf\n22264 bqcvlnw.pmq\ndir hwv\n200690 jlwjsbw.bzf\ndir npclt\n243708 qvnbwvt.sbv\n157861 tsrqvpbq.mtf\n$ cd bnvspstf\n$ ls\n46133 mwvz.vwh\n289236 rjcp.gqj\n$ cd ..\n$ cd hwv\n$ ls\ndir tsrqvpbq\n$ cd tsrqvpbq\n$ ls\n292872 rvvjbz.mgh\n$ cd ..\n$ cd ..\n$ cd npclt\n$ ls\n191646 bhllwpr\n26548 jlwjsbw.bzf\n214302 nnqz\n74637 szdjtbt.tmw\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd gsszlj\n$ ls\ndir bjvqcfwc\ndir dfzhdhs\n179837 dsm.hzf\n112354 gnrzhsw.jcf\n175236 jlwjsbw.bzf\ndir mfnllhfw\ndir nwvcgb\ndir rvvjbz\ndir vcvmq\n$ cd bjvqcfwc\n$ ls\n125387 rvvjbz\n$ cd ..\n$ cd dfzhdhs\n$ ls\n218291 jlwjsbw.bzf\ndir jsmjbfg\ndir rvvjbz\n272548 zdrtjvzj.rlt\n196309 ztdcrnl.hjj\n$ cd jsmjbfg\n$ ls\n72259 bmszdt\n242641 fsjwz.css\n109294 mwtlz\n149525 sgngzrnn.mww\n$ cd ..\n$ cd rvvjbz\n$ ls\n175613 rqjmjhrb\n$ cd ..\n$ cd ..\n$ cd mfnllhfw\n$ ls\n119986 fcjrv.dvh\ndir gwjgjljj\n157962 jjjbv.fdp\ndir mwttp\n30246 vhzdjv.fqh\n197554 zdrtjvzj.rlt\n288875 zhdn.dtj\n$ cd gwjgjljj\n$ ls\n237890 mlmmfh\ndir ncjzqll\n10935 zdrtjvzj.rlt\n$ cd ncjzqll\n$ ls\n152092 gwwh.ttt\n$ cd ..\n$ cd ..\n$ cd mwttp\n$ ls\n217929 fsjwz.css\n$ cd ..\n$ cd ..\n$ cd nwvcgb\n$ ls\n131410 fsjwz.css\ndir nqrdmvjm\n82487 qwbg.hcb\ndir tsrqvpbq\n123617 tsrqvpbq.wqw\n$ cd nqrdmvjm\n$ ls\ndir btjwzz\ndir dsm\ndir fcrsj\n141465 fsjwz.css\n133916 ztdcrnl.hjj\n$ cd btjwzz\n$ ls\ndir nqrdmvjm\ndir tsrqvpbq\n150003 zdrtjvzj.rlt\n$ cd nqrdmvjm\n$ ls\ndir dsm\n160109 gzv.wzw\n33187 mcgmjn.ftg\ndir pbgdcwd\n167821 ztdcrnl.hjj\n$ cd dsm\n$ ls\n84979 gwwh.ttt\ndir rvvjbz\n$ cd rvvjbz\n$ ls\n189309 btvjmhp.dwm\n$ cd ..\n$ cd ..\n$ cd pbgdcwd\n$ ls\n240743 rzgbfcg.dzg\n$ cd ..\n$ cd ..\n$ cd tsrqvpbq\n$ ls\n284223 mmhvjn\n188341 tnv.rcs\n271396 zdrtjvzj.rlt\n$ cd ..\n$ cd ..\n$ cd dsm\n$ ls\n128966 ptf\n$ cd ..\n$ cd fcrsj\n$ ls\n261786 qljq.nrv\n$ cd ..\n$ cd ..\n$ cd tsrqvpbq\n$ ls\n57089 fsjwz.css\n208087 ttfhpzll\n$ cd ..\n$ cd ..\n$ cd rvvjbz\n$ ls\ndir ldglv\n$ cd ldglv\n$ ls\n39389 wjwzdg.ldb\n$ cd ..\n$ cd ..\n$ cd vcvmq\n$ ls\ndir jzgd\n246541 lmfdrnnz.dcc\n169613 npclt\n264902 npclt.jsl\ndir pwzbvvwz\n82651 rch.bsc\n223282 vddwtwz.pqf\ndir wnb\n$ cd jzgd\n$ ls\n91717 dqmhdw.mjr\n69771 ztdcrnl.hjj\n$ cd ..\n$ cd pwzbvvwz\n$ ls\ndir cdmfv\ndir fvqjbd\ndir nhvhhs\ndir npclt\ndir rgdb\n$ cd cdmfv\n$ ls\n172054 dsm.qjw\n$ cd ..\n$ cd fvqjbd\n$ ls\n212067 hclqv\ndir tcjsbn\n$ cd tcjsbn\n$ ls\n40576 wbzwnc.pqf\n13447 wlrjhcf.jtg\n$ cd ..\n$ cd ..\n$ cd nhvhhs\n$ ls\n92810 bgfgrzs\n$ cd ..\n$ cd npclt\n$ ls\ndir dcs\ndir tsrqvpbq\n$ cd dcs\n$ ls\n274856 nrqwg\n$ cd ..\n$ cd tsrqvpbq\n$ ls\n144678 jlwjsbw.bzf\ndir nqrdmvjm\n163728 qwddbflc.gjp\n$ cd nqrdmvjm\n$ ls\n122069 btpm.vhg\n105752 psrmw\n149744 rvvjbz.bnn\n126434 ztdcrnl.hjj\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd rgdb\n$ ls\n75645 blzt\ndir clz\ndir ddmbzz\ndir hrl\n280472 jgmd.htc\n217770 nqwgl.qqb\ndir qjcrf\n$ cd clz\n$ ls\ndir fshcptjq\n125496 lhgsdhl.gss\n291857 pfbjptg.lqh\n78923 rdhmmqml.lrw\n$ cd fshcptjq\n$ ls\n157704 btf\n66314 qcpjsfr\n225592 rsftvgr\n$ cd ..\n$ cd ..\n$ cd ddmbzz\n$ ls\n217731 cbc.dmn\n16389 cdwwz\n256395 gwwh.ttt\n233481 rvsslvbh\ndir rvvjbz\ndir zgc\n$ cd rvvjbz\n$ ls\ndir zrwtdlzz\n$ cd zrwtdlzz\n$ ls\n21488 gdgl.vbc\n$ cd ..\n$ cd ..\n$ cd zgc\n$ ls\n222107 gwwh.ttt\n35382 npclt.fpp\n$ cd ..\n$ cd ..\n$ cd hrl\n$ ls\ndir rvvjbz\n$ cd rvvjbz\n$ ls\n65335 dgn.mgd\n$ cd ..\n$ cd ..\n$ cd qjcrf\n$ ls\ndir fjrdgbwh\n$ cd fjrdgbwh\n$ ls\n143960 wvnzt.wvq\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd wnb\n$ ls\n66543 jlwjsbw.bzf\ndir nqrdmvjm\ndir pfwptjtl\n3047 sbdlzbt.hlj\n$ cd nqrdmvjm\n$ ls\ndir cqn\ndir mnmbmb\n182573 pmw.pdl\ndir rvvjbz\n92911 ztdcrnl.hjj\n$ cd cqn\n$ ls\n38563 npclt.pcl\n14353 sdlmtzzv\n52230 ztdcrnl.hjj\n$ cd ..\n$ cd mnmbmb\n$ ls\n212337 fsjwz.css\n24700 gwwh.ttt\n10243 npclt\ndir nqrdmvjm\n238617 rvvjbz\n$ cd nqrdmvjm\n$ ls\n19026 plrvst.bpd\n$ cd ..\n$ cd ..\n$ cd rvvjbz\n$ ls\n23115 fsjwz.css\n260656 jlwjsbw.bzf\n113097 zdrtjvzj.rlt\n$ cd ..\n$ cd ..\n$ cd pfwptjtl\n$ ls\n134817 jlwjsbw.bzf\n80522 npclt\n254529 nqrdmvjm.mbc\n35322 ztdcrnl.hjj\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd hmw\n$ ls\ndir cfc\ndir cmbtwjqm\ndir dsm\n81077 dzsj.bsl\ndir gzgr\ndir jrdhssrz\ndir npclt\ndir tsrqvpbq\ndir vssgzdw\ndir wngccwdr\n5928 wrpd.zwq\n113540 ztdcrnl.hjj\n$ cd cfc\n$ ls\n159334 npclt\n212665 ztdcrnl.hjj\n$ cd ..\n$ cd cmbtwjqm\n$ ls\ndir vzftvhhc\n$ cd vzftvhhc\n$ ls\n86763 jlwjsbw.bzf\ndir nbj\ndir qzbf\n$ cd nbj\n$ ls\n63776 jlwjsbw.bzf\n$ cd ..\n$ cd qzbf\n$ ls\n189850 rtszjp.zhq\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd dsm\n$ ls\ndir bddwfjhv\n258304 fltv\n4285 jlwjsbw.bzf\ndir nqrdmvjm\ndir rvvjbz\n258902 zdrtjvzj.rlt\n$ cd bddwfjhv\n$ ls\n201408 zdrtjvzj.rlt\n$ cd ..\n$ cd nqrdmvjm\n$ ls\n250981 npclt.dnd\n$ cd ..\n$ cd rvvjbz\n$ ls\n181444 npclt.msj\n146533 thzv.jbn\n$ cd ..\n$ cd ..\n$ cd gzgr\n$ ls\ndir brmzzz\ndir dsm\n$ cd brmzzz\n$ ls\n40671 jlwjsbw.bzf\n$ cd ..\n$ cd dsm\n$ ls\n53299 bmdpw\ndir npclt\n223542 qdrlng\ndir thjnrtq\n$ cd npclt\n$ ls\n30938 bdldl\n36847 gfwbhj.nvh\n159051 qjpggrst.czp\n233569 vwpr.drg\ndir wwln\n$ cd wwln\n$ ls\n153489 fsjwz.css\n196950 lzcrjs\n$ cd ..\n$ cd ..\n$ cd thjnrtq\n$ ls\n30861 fsjwz.css\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd jrdhssrz\n$ ls\n194556 bqcn.ctq\ndir gnhc\n148157 gwwh.ttt\ndir jcqcjbj\n245407 jlwjsbw.bzf\n248457 lmvh\n$ cd gnhc\n$ ls\n183841 fsjwz.css\n128648 hzcpmz\n154895 mvznln\n193794 ztdcrnl.hjj\n$ cd ..\n$ cd jcqcjbj\n$ ls\n266176 cbbfjsp\ndir dsm\n195555 sfq\n$ cd dsm\n$ ls\n13098 bjhsqfpp.rvw\ndir grpp\ndir nqb\n$ cd grpp\n$ ls\n259797 jvw.psl\n32317 sfm.twr\n$ cd ..\n$ cd nqb\n$ ls\n82426 rvvjbz.fdm\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd npclt\n$ ls\ndir tqzmprzr\n$ cd tqzmprzr\n$ ls\n278120 dsm.hqd\n$ cd ..\n$ cd ..\n$ cd tsrqvpbq\n$ ls\ndir dqbnbl\ndir dsm\ndir lsglr\n213028 rvvjbz.rvh\n112991 tsrqvpbq.ptw\n$ cd dqbnbl\n$ ls\ndir dhzs\n281375 dsm\n121452 gwwh.ttt\ndir mbc\ndir npclt\n211213 tsrqvpbq.zsz\n125518 zdrtjvzj.rlt\n$ cd dhzs\n$ ls\n110840 gwwh.ttt\n197645 tsrqvpbq\n$ cd ..\n$ cd mbc\n$ ls\n224503 drsrlls.ctp\ndir dzm\n65461 jlwjsbw.bzf\ndir nqrdmvjm\n137158 nqrdmvjm.vtq\ndir rvvjbz\n126868 rwrzljq\n$ cd dzm\n$ ls\n279593 fsjwz.css\n13111 gwwh.ttt\n205453 hchlb.bdn\n277556 jlwjsbw.bzf\ndir jvd\ndir nqrdmvjm\ndir prqlqh\ndir rhdhhfs\ndir rvvjbz\n$ cd jvd\n$ ls\n76776 fsjwz.css\n85847 wqdzvs.vwf\n$ cd ..\n$ cd nqrdmvjm\n$ ls\n40200 npclt.fcq\n$ cd ..\n$ cd prqlqh\n$ ls\n267371 fsjwz.css\n$ cd ..\n$ cd rhdhhfs\n$ ls\n51224 dsm.qln\n$ cd ..\n$ cd rvvjbz\n$ ls\ndir npclt\ndir wdhgmfb\n60599 wjwgrq\n$ cd npclt\n$ ls\n138588 bdqtq.slq\n221322 rjmbd.pdj\n279540 ztdcrnl.hjj\n$ cd ..\n$ cd wdhgmfb\n$ ls\n98271 jcg.pwz\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd nqrdmvjm\n$ ls\n221950 swnsstls.zcl\n7947 tqwhs\n$ cd ..\n$ cd rvvjbz\n$ ls\n272797 zdrtjvzj.rlt\n$ cd ..\n$ cd ..\n$ cd npclt\n$ ls\n294537 bqlgnwwf.qqf\n285887 flzmnmft\n3041 fsjwz.css\ndir npclt\ndir rvvjbz\n235966 zhwvl\n$ cd npclt\n$ ls\n96669 sjcr.qmc\n$ cd ..\n$ cd rvvjbz\n$ ls\n240351 fsjwz.css\n112539 rvvjbz.tlc\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd dsm\n$ ls\ndir dpbsq\ndir lmvjnd\ndir vjnb\n$ cd dpbsq\n$ ls\ndir vczm\n$ cd vczm\n$ ls\n252709 jfzq.fvc\n$ cd ..\n$ cd ..\n$ cd lmvjnd\n$ ls\n20118 rsp.njm\n$ cd ..\n$ cd vjnb\n$ ls\n192558 vvggw.ljj\n$ cd ..\n$ cd ..\n$ cd lsglr\n$ ls\n222728 qvp\n296718 ztdcrnl.hjj\n$ cd ..\n$ cd ..\n$ cd vssgzdw\n$ ls\ndir smfhgcv\n$ cd smfhgcv\n$ ls\n16174 dtpgsvfv.csm\n43403 lhbqdpv\ndir ndh\n52985 pcj.csh\n81157 vwsrt\n278111 zdrtjvzj.rlt\n$ cd ndh\n$ ls\n80287 jlwjsbw.bzf\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd wngccwdr\n$ ls\n6088 ppjnslg\n$ cd ..\n$ cd ..\n$ cd jhmrn\n$ ls\ndir qwqhhbth\n$ cd qwqhhbth\n$ ls\ndir ggfmlp\ndir qgflbldg\n$ cd ggfmlp\n$ ls\n35739 dsm\n38351 jlwjsbw.bzf\n$ cd ..\n$ cd qgflbldg\n$ ls\ndir pbw\ndir rvvjbz\ndir tqppnqmv\n$ cd pbw\n$ ls\ndir nqrdmvjm\n5912 nqrdmvjm.qvj\n$ cd nqrdmvjm\n$ ls\ndir tnd\n$ cd tnd\n$ ls\ndir lwsvwsl\n$ cd lwsvwsl\n$ ls\n150503 jlwjsbw.bzf\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd rvvjbz\n$ ls\ndir dmrff\ndir ssnbl\ndir zgrgt\n$ cd dmrff\n$ ls\ndir vmmzmf\n$ cd vmmzmf\n$ ls\n211105 tsrqvpbq\n$ cd ..\n$ cd ..\n$ cd ssnbl\n$ ls\n246210 mlj.qbv\n$ cd ..\n$ cd zgrgt\n$ ls\n207409 lnvqlhsj\n$ cd ..\n$ cd ..\n$ cd tqppnqmv\n$ ls\n59007 gwwh.ttt\n123705 jlwjsbw.bzf\n277423 rvvjbz.hbn\n170157 tbs\ndir ztg\n$ cd ztg\n$ ls\n8432 fsjwz.css\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd ncb\n$ ls\n30859 dsm\n74337 jvp.jwl\ndir lgvwz\n150310 lhl.rtq\n$ cd lgvwz\n$ ls\n105307 fftbgl.tnh\n69432 npclt.sdq\n49765 zdrtjvzj.rlt\n214149 ztdcrnl.hjj\n$ cd ..\n$ cd ..\n$ cd npclt\n$ ls\ndir dsm\ndir rvvjbz\ndir trr\n$ cd dsm\n$ ls\ndir bcccgpl\ndir cvddqch\n210401 fsjwz.css\n96482 nqrdmvjm.tgr\ndir nwctzch\n29453 zdrtjvzj.rlt\n$ cd bcccgpl\n$ ls\n237918 dshtjdcs\ndir mtrcfbf\ndir tgt\ndir tsrqvpbq\n99779 wpfsbnh.nbh\n257112 ztdcrnl.hjj\n$ cd mtrcfbf\n$ ls\ndir hms\n49756 tsrqvpbq\n$ cd hms\n$ ls\n185755 zdrtjvzj.rlt\n$ cd ..\n$ cd ..\n$ cd tgt\n$ ls\ndir dsm\ndir jmfdpdf\n256858 zdrtjvzj.rlt\n$ cd dsm\n$ ls\n71528 dsm.rvc\n$ cd ..\n$ cd jmfdpdf\n$ ls\n231263 hgsvvrqt.vbp\n$ cd ..\n$ cd ..\n$ cd tsrqvpbq\n$ ls\n218774 clhqvp\n$ cd ..\n$ cd ..\n$ cd cvddqch\n$ ls\n144164 fsjwz.css\ndir gfszp\n60880 nqrdmvjm\n222198 vhhtgj\n$ cd gfszp\n$ ls\n127091 fsjwz.css\n$ cd ..\n$ cd ..\n$ cd nwctzch\n$ ls\n258292 rfvvc\n$ cd ..\n$ cd ..\n$ cd rvvjbz\n$ ls\ndir cnv\ndir dtpswgq\ndir ggdhw\n97538 jsjlq\n218535 nqrdmvjm.fhj\n134022 tsrqvpbq.mbs\n51273 zdrtjvzj.rlt\n$ cd cnv\n$ ls\n208016 gzvmv.dfg\n$ cd ..\n$ cd dtpswgq\n$ ls\ndir jfbgfts\n$ cd jfbgfts\n$ ls\n273657 bbtbqv\n77349 dsm.rnc\ndir nqrdmvjm\n208448 zdrtjvzj.rlt\n$ cd nqrdmvjm\n$ ls\ndir bjdrqnt\ndir msqc\ndir npclt\ndir rsms\ndir vzhdtv\n$ cd bjdrqnt\n$ ls\n103077 tph.bpz\n264222 wmvzc\n$ cd ..\n$ cd msqc\n$ ls\n72288 ztdcrnl.hjj\n$ cd ..\n$ cd npclt\n$ ls\ndir tfbzdm\n$ cd tfbzdm\n$ ls\ndir nqrdmvjm\n35970 nqrdmvjm.gwj\n54275 rvvjbz.pvs\ndir wwrsrmn\n179618 ztdcrnl.hjj\n$ cd nqrdmvjm\n$ ls\ndir gljgj\n$ cd gljgj\n$ ls\n135000 gwwh.ttt\n$ cd ..\n$ cd ..\n$ cd wwrsrmn\n$ ls\n17120 npclt.vhz\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd rsms\n$ ls\n198169 fsjwz.css\n$ cd ..\n$ cd vzhdtv\n$ ls\n234619 gwwh.ttt\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd ggdhw\n$ ls\ndir dsm\ndir fmljfpfb\ndir nqrdmvjm\ndir qrhnjrn\ndir vpsqmmp\n$ cd dsm\n$ ls\n185390 rvvjbz.ljl\n70843 scrzhct.shj\ndir zqd\n$ cd zqd\n$ ls\n197478 lrpnc.pqp\ndir nljssvvw\n228126 rfsnv\ndir wzvvggdp\n$ cd nljssvvw\n$ ls\n248489 dwdcnzb.ztq\n$ cd ..\n$ cd wzvvggdp\n$ ls\n40266 jlwjsbw.bzf\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd fmljfpfb\n$ ls\ndir chc\n232964 gwwh.ttt\n283351 jlwjsbw.bzf\n$ cd chc\n$ ls\n273399 cjtznvrq.jcd\n250531 dsm.djs\ndir lgqz\n173885 pmlw.hcb\n273356 swwzbpdm\n7329 wtvs.qrr\n$ cd lgqz\n$ ls\n9432 fst.nlb\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd nqrdmvjm\n$ ls\n129926 zdrtjvzj.rlt\n$ cd ..\n$ cd qrhnjrn\n$ ls\ndir vnvchpr\ndir zchcq\n271220 ztdcrnl.hjj\n$ cd vnvchpr\n$ ls\n257931 rvvjbz\n132252 wtgs.btb\n$ cd ..\n$ cd zchcq\n$ ls\ndir hmf\n215104 sshml\n$ cd hmf\n$ ls\n253334 gbvbmwbf.lhs\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd vpsqmmp\n$ ls\n32455 gwwh.ttt\n170338 rfsvs.dfq\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd trr\n$ ls\ndir bfjwfd\ndir bhrvh\ndir ggfc\n187910 gwwh.ttt\ndir mtqftj\n$ cd bfjwfd\n$ ls\ndir npclt\ndir wqqfszn\n$ cd npclt\n$ ls\n269520 trrcw.jmq\n$ cd ..\n$ cd wqqfszn\n$ ls\n151594 rvvjbz.gvt\n$ cd ..\n$ cd ..\n$ cd bhrvh\n$ ls\n251782 cpbvqrjj\n$ cd ..\n$ cd ggfc\n$ ls\n65357 gwwh.ttt\ndir jqjtwf\n$ cd jqjtwf\n$ ls\n65025 wzrp.pbp\n$ cd ..\n$ cd ..\n$ cd mtqftj\n$ ls\n294942 vtjhwjr.qgc\n88168 wvbnjp.blf\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd rvvjbz\n$ ls\ndir csfp\n141875 dsm\n294580 jlwjsbw.bzf\ndir jqlm\n25928 lqhpn.jrh\n224295 zdrtjvzj.rlt\n113314 zww.ftt\n$ cd csfp\n$ ls\n153717 ztdcrnl.hjj\n$ cd ..\n$ cd jqlm\n$ ls\n163455 jlwjsbw.bzf'
const shellTextLines: string[] = shellText.split('\n');

const root: Directory = new Directory(null, '/');

(() => {
    let currentDirectory: Directory = root;
    for (const line of shellTextLines) {

        const cdCommand = /^\$ cd (.*)$/.exec(line);
        if (cdCommand) {
            const dirName: string = cdCommand[1]!; // Assertion guaranteed by regex
            currentDirectory = currentDirectory.getSubdirectory(dirName);
            continue;
        }

        if (line === '$ ls') {
            continue;
        }

        const listedFile = /^(\d*) (.*)$/.exec(line);
        if (listedFile) {
            const [, size, filename] = listedFile as unknown as [unknown, `${number}`, string]; // Assertion guaranteed by regex
            currentDirectory.addFile(filename, parseInt(size));
            continue;
        }

        const listedDir = /^dir (.*)$/.exec(line);
        if (listedDir) {
            const dirName: string = listedDir[1]!; // Assertion guaranteed by regex
            currentDirectory.addSubdirectory(dirName);
            continue;
        }

        throw Error(`Did not understand format for line: "${line}"`);
    }
})()

const allDirectories: Directory[] = (() => {

    const directories: Record<string, Directory> = {};

    function addSubdirectories(directory: Directory) {
        directory.getSubdirectories().forEach((dir) => {
            directories[dir.path] = dir;
            addSubdirectories(dir);
        });
    }

    addSubdirectories(root);

    return Object.values(directories);

})();

const directorySizes: number[] = allDirectories.map((dir) => dir.getTotalSize());
const totalSize: number = root.getTotalSize();

const problem1Solution = directorySizes.filter((size) => size <= 100000).reduce((x, y) => x + y, 0);
const problem2Solution = directorySizes.filter((size) => 70000000 - totalSize + size >= 30000000).sort((x, y) => x - y)[0];

console.log(problem1Solution);
console.log(problem2Solution);

export {};
