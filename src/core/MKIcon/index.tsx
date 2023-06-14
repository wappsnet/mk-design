import { FC } from 'react';
import classNames from 'classnames';

import AddressBookSvg from 'media/icons/address-book';
import AddressCardSvg from 'media/icons/address-card';
import BellSvg from 'media/icons/bell';
import BellSlashSvg from 'media/icons/bell-slash';
import CalendarSvg from 'media/icons/calendar';
import CalendarCheckSvg from 'media/icons/calendar-check';
import CalendarMinusSvg from 'media/icons/calendar-minus';
import CalendarPlusSvg from 'media/icons/calendar-plus';
import CalendarXMarkSvg from 'media/icons/calendar-xmark';
import ChartBarSvg from 'media/icons/chart-bar';
import ChessBishopSvg from 'media/icons/chess-bishop';
import ChessKingSvg from 'media/icons/chess-king';
import ChessKnightSvg from 'media/icons/chess-knight';
import ChessPawnSvg from 'media/icons/chess-pawn';
import ChessQueen from 'media/icons/chess-queen';
import ChessRookSvg from 'media/icons/chess-rook';
import CircleSvg from 'media/icons/circle';
import CircleCheckSvg from 'media/icons/circle-check';
import CircleDotSvg from 'media/icons/circle-dot';
import CircleDownSvg from 'media/icons/circle-down';
import CircleLeftSvg from 'media/icons/circle-left';
import CirclePauseSvg from 'media/icons/circle-pause';
import CirclePlaySvg from 'media/icons/circle-play';
import CircleQuestionSvg from 'media/icons/circle-question';
import CircleStopSvg from 'media/icons/circle-stop';
import CircleUpSvg from 'media/icons/circle-up';
import CircleUseSvg from 'media/icons/circle-user';
import CircleXmarkSvg from 'media/icons/circle-xmark';
import ClipboardSvg from 'media/icons/clipboard';
import ClockSvg from 'media/icons/clock';
import ClosedCaptioningSvg from 'media/icons/closed-captioning';
import CommentDotsSvg from 'media/icons/comment-dots';
import CommentsSvg from 'media/icons/comments';
import CommentSvg from 'media/icons/comment';
import CompassSvg from 'media/icons/compass';
import CopySvg from 'media/icons/copy';
import CopyRightSvg from 'media/icons/copyright';
import CreditCardSvg from 'media/icons/credit-card';
import EnvelopeSvg from 'media/icons/envelope';
import EnvelopeOpenSvg from 'media/icons/envelope-open';
import EyeSvg from 'media/icons/eye';
import EyeSlashSvg from 'media/icons/eye-slash';
import FaceAngrySvg from 'media/icons/face-angry';
import FaceDizzySvg from 'media/icons/face-dizzy';
import FaceFlushedSvg from 'media/icons/face-flushed';
import FaceFrownSvg from 'media/icons/face-frown';
import FaceFrownOpenSvg from 'media/icons/face-frown-open';
import FaceGrinBeamSvg from 'media/icons/face-grin-beam';
import FaceGrinBeamSweatSvg from 'media/icons/face-grin-beam-sweat';
import FaceGrinHeartSvg from 'media/icons/face-grin-hearts';
import FaceGrinSquintSvg from 'media/icons/face-grin-squint';
import FaceGrinSquintTearsSvg from 'media/icons/face-grin-squint-tears';
import FaceGrinStartsSvg from 'media/icons/face-grin-stars';
import FaceGrinTearsSvg from 'media/icons/face-grin-tears';
import FaceGrinTongueSvg from 'media/icons/face-grin-tongue';
import FaceGrinTongueSquintSvg from 'media/icons/face-grin-tongue-squint';
import FaceGrinTongueWinkSvg from 'media/icons/face-grin-tongue-wink';
import FaceGrinWideSvg from 'media/icons/face-grin-wide';
import FaceGrinWinkSvg from 'media/icons/face-grin-wink';
import FaceKissSvg from 'media/icons/face-kiss';
import FaceKissBeamSvg from 'media/icons/face-kiss-beam';
import FaceKissWinkHeartSvg from 'media/icons/face-kiss-wink-heart';
import FaceLaughSvg from 'media/icons/face-laugh';
import FaceLaughBeamSvg from 'media/icons/face-laugh-beam';
import FaceLaughSquintSvg from 'media/icons/face-laugh-squint';
import FaceLaughWinkSvg from 'media/icons/face-laugh-wink';
import FaceMehSvg from 'media/icons/face-meh';
import FaceMehBlankSvg from 'media/icons/face-meh-blank';
import FaceRollingEyesSvg from 'media/icons/face-rolling-eyes';
import FaceSadCrySvg from 'media/icons/face-sad-cry';
import FaceSadTearSvg from 'media/icons/face-sad-tear';
import FaceSmileSvg from 'media/icons/face-smile';
import FaceSmileBeamSvg from 'media/icons/face-smile-beam';
import FaceSurpriseSvg from 'media/icons/face-surprise';
import FaceTiredSvg from 'media/icons/face-tired';
import FileSvg from 'media/icons/file';
import FileAudioSvg from 'media/icons/file-audio';
import FileCodeSvg from 'media/icons/file-code';
import FileExcelSvg from 'media/icons/file-excel';
import FileImageSvg from 'media/icons/file-image';
import FileLinesSvg from 'media/icons/file-lines';
import FilePdfSvg from 'media/icons/file-pdf';
import FilePowerpointSvg from 'media/icons/file-powerpoint';
import FileWordSvg from 'media/icons/file-word';
import FileZipperSvg from 'media/icons/file-zipper';
import FolderSvg from 'media/icons/folder';
import FolderClosedSvg from 'media/icons/folder-closed';
import FootballSvg from 'media/icons/football';
import GemSvg from 'media/icons/gem';
import HandSvg from 'media/icons/hand';
import HandBackFistSvg from 'media/icons/hand-back-fist';
import HandLizardSvg from 'media/icons/hand-lizard';
import HandPeaceSvg from 'media/icons/hand-peace';
import HandPointDownSvg from 'media/icons/hand-point-down';
import HandPointUpSvg from 'media/icons/hand-point-up';
import HandPointLeftSvg from 'media/icons/hand-point-left';
import HandPointRightSvg from 'media/icons/hand-point-right';
import HandPointerSvg from 'media/icons/hand-pointer';
import HandScissorsSvg from 'media/icons/hand-scissors';
import HandPockSvg from 'media/icons/hand-spock';
import HandShaeSvg from 'media/icons/handshake';
import HandDriveSvg from 'media/icons/hard-drive';
import HeartSvg from 'media/icons/heart';
import HospitalSvg from 'media/icons/hospital';
import HourGlassSvg from 'media/icons/hourglass';
import HourGlassHalfSvg from 'media/icons/hourglass-half';
import './style.scss';

const SVG_ICONS = {
  [`address-book`]: AddressBookSvg,
  [`address-card`]: AddressCardSvg,
  [`bell`]: BellSvg,
  [`bell-slash`]: BellSlashSvg,
  [`calendar`]: CalendarSvg,
  [`calendar-check`]: CalendarCheckSvg,
  [`calendar-minus`]: CalendarMinusSvg,
  [`calendar-plus`]: CalendarPlusSvg,
  [`calendar-xmark`]: CalendarXMarkSvg,
  [`chart-bar`]: ChartBarSvg,
  [`chess-bishop`]: ChessBishopSvg,
  [`chess-king`]: ChessKingSvg,
  [`chess-pawn`]: ChessPawnSvg,
  [`chess-knight`]: ChessKnightSvg,
  [`chess-queen`]: ChessQueen,
  [`chess-rook`]: ChessRookSvg,
  [`circle`]: CircleSvg,
  [`circle-check`]: CircleCheckSvg,
  [`circle-dot`]: CircleDotSvg,
  [`circle-down`]: CircleDownSvg,
  [`circle-left`]: CircleLeftSvg,
  [`circle-pause`]: CirclePauseSvg,
  [`circle-play`]: CirclePlaySvg,
  [`circle-question`]: CircleQuestionSvg,
  [`circle-stop`]: CircleStopSvg,
  [`circle-up`]: CircleUpSvg,
  [`circle-user`]: CircleUseSvg,
  [`circle-xmark`]: CircleXmarkSvg,
  [`clipboard`]: ClipboardSvg,
  [`clock`]: ClockSvg,
  [`clone`]: ClockSvg,
  [`closed-captioning`]: ClosedCaptioningSvg,
  [`comments`]: CommentsSvg,
  [`comments-dots`]: CommentDotsSvg,
  [`comment`]: CommentSvg,
  [`compass`]: CompassSvg,
  [`copy`]: CopySvg,
  [`copyright`]: CopyRightSvg,
  [`credit-card`]: CreditCardSvg,
  [`envelope`]: EnvelopeSvg,
  [`envelope-open`]: EnvelopeOpenSvg,
  [`eye`]: EyeSvg,
  [`eye-slash`]: EyeSlashSvg,
  [`face-angry`]: FaceAngrySvg,
  [`face-dizzy`]: FaceDizzySvg,
  [`face-flushed`]: FaceFlushedSvg,
  [`face-frown`]: FaceFrownSvg,
  [`face-frown-open`]: FaceFrownOpenSvg,
  [`face-grin-beam-sweat`]: FaceGrinBeamSweatSvg,
  [`face-grin-heart`]: FaceGrinHeartSvg,
  [`face-green-beam`]: FaceGrinBeamSvg,
  [`face-grin-squint`]: FaceGrinSquintSvg,
  [`face-grin-squint-tears`]: FaceGrinSquintTearsSvg,
  [`face-grin-starts`]: FaceGrinStartsSvg,
  [`face-grin-tears`]: FaceGrinTearsSvg,
  [`face-grin-tongue`]: FaceGrinTongueSvg,
  [`face-grin-tongue-wink`]: FaceGrinTongueWinkSvg,
  [`face-grin-tongue-squint`]: FaceGrinTongueSquintSvg,
  [`face-grin-wide`]: FaceGrinWideSvg,
  [`face-grin-wink`]: FaceGrinWinkSvg,
  [`face-kiss`]: FaceKissSvg,
  [`face-kiss-beam`]: FaceKissBeamSvg,
  [`face-kiss-wink-heart`]: FaceKissWinkHeartSvg,
  [`face-laugh`]: FaceLaughSvg,
  [`face-laugh-beam`]: FaceLaughBeamSvg,
  [`face-laugh-squint`]: FaceLaughSquintSvg,
  [`face-laugh-wink`]: FaceLaughWinkSvg,
  [`face-meh`]: FaceMehSvg,
  [`face-meh-blank`]: FaceMehBlankSvg,
  [`face-rolling-eyes`]: FaceRollingEyesSvg,
  [`face-sad-cry`]: FaceSadCrySvg,
  [`face-sad-tear`]: FaceSadTearSvg,
  [`face-smile`]: FaceSmileSvg,
  [`face-smile-beam`]: FaceSmileBeamSvg,
  [`face-surprise`]: FaceSurpriseSvg,
  [`face-tired`]: FaceTiredSvg,
  [`file`]: FileSvg,
  [`file-audio`]: FileAudioSvg,
  [`file-code`]: FileCodeSvg,
  [`file-excel`]: FileExcelSvg,
  [`file-image`]: FileImageSvg,
  [`file-lines`]: FileLinesSvg,
  [`file-pdf`]: FilePdfSvg,
  [`file-powerpoint`]: FilePowerpointSvg,
  [`file-word`]: FileWordSvg,
  [`file-zipper`]: FileZipperSvg,
  [`folder`]: FolderSvg,
  [`folder-closed`]: FolderClosedSvg,
  [`football`]: FootballSvg,
  [`gem`]: GemSvg,
  [`hand`]: HandSvg,
  [`hand-back-fist`]: HandBackFistSvg,
  [`hand-lizard`]: HandLizardSvg,
  [`hand-peace`]: HandPeaceSvg,
  [`hand-point-down`]: HandPointDownSvg,
  [`hand-point-up`]: HandPointUpSvg,
  [`hand-point-left`]: HandPointLeftSvg,
  [`hand-point-right`]: HandPointRightSvg,
  [`hand-pointer`]: HandPointerSvg,
  [`hand-scissors`]: HandScissorsSvg,
  [`hand-spock`]: HandPockSvg,
  [`handshake`]: HandShaeSvg,
  [`hard-drive`]: HandDriveSvg,
  [`heart`]: HeartSvg,
  [`hospital`]: HospitalSvg,
  [`hourglass`]: HourGlassSvg,
  [`hourglass-half`]: HourGlassHalfSvg,
};

type MKIconProps = {
  name: keyof typeof SVG_ICONS;
  className?: string;
};

const MKIcon: FC<MKIconProps> = ({ name, className = '' }) => {
  const icon = SVG_ICONS[name];
  return (
    <span
      className={classNames('mk-svg-icon', className)}
      dangerouslySetInnerHTML={{
        __html: icon,
      }}
    />
  );
};

export default MKIcon;
