import { FC, SVGProps } from 'react';
import classNames from 'classnames';

import AddressBookSvg from 'assets/icons/address-book.svg';
import AddressCardSvg from 'assets/icons/address-card.svg';
import BellSvg from 'assets/icons/bell.svg';
import BellSlashSvg from 'assets/icons/bell-slash.svg';
import CalendarSvg from 'assets/icons/calendar.svg';
import CalendarCheckSvg from 'assets/icons/calendar-check.svg';
import CalendarMinusSvg from 'assets/icons/calendar-minus.svg';
import CalendarPlusSvg from 'assets/icons/calendar-plus.svg';
import CalendarXMarkSvg from 'assets/icons/calendar-xmark.svg';
import ChartBarSvg from 'assets/icons/chart-bar.svg';
import ChessBishopSvg from 'assets/icons/chess-bishop.svg';
import ChessKingSvg from 'assets/icons/chess-king.svg';
import ChessKnightSvg from 'assets/icons/chess-knight.svg';
import ChessPawnSvg from 'assets/icons/chess-pawn.svg';
import ChessQueenSvg from 'assets/icons/chess-queen.svg';
import ChessRookSvg from 'assets/icons/chess-rook.svg';
import CircleSvg from 'assets/icons/circle.svg';
import CircleCheckSvg from 'assets/icons/circle-check.svg';
import CircleDotSvg from 'assets/icons/circle-dot.svg';
import CircleDownSvg from 'assets/icons/circle-down.svg';
import CircleLeftSvg from 'assets/icons/circle-left.svg';
import CirclePauseSvg from 'assets/icons/circle-pause.svg';
import CirclePlaySvg from 'assets/icons/circle-play.svg';
import CircleQuestionSvg from 'assets/icons/circle-question.svg';
import CircleStopSvg from 'assets/icons/circle-stop.svg';
import CircleUpSvg from 'assets/icons/circle-up.svg';
import CircleUseSvg from 'assets/icons/circle-user.svg';
import CircleXmarkSvg from 'assets/icons/circle-xmark.svg';
import ClipboardSvg from 'assets/icons/clipboard.svg';
import ClockSvg from 'assets/icons/clock.svg';
import ClosedCaptioningSvg from 'assets/icons/closed-captioning.svg';
import CommentDotsSvg from 'assets/icons/comment-dots.svg';
import CommentsSvg from 'assets/icons/comments.svg';
import CommentSvg from 'assets/icons/comment.svg';
import CompassSvg from 'assets/icons/compass.svg';
import CopySvg from 'assets/icons/copy.svg';
import CopyRightSvg from 'assets/icons/copyright.svg';
import CreditCardSvg from 'assets/icons/credit-card.svg';
import EnvelopeSvg from 'assets/icons/envelope.svg';
import EnvelopeOpenSvg from 'assets/icons/envelope-open.svg';
import EyeSvg from 'assets/icons/eye.svg';
import EyeSlashSvg from 'assets/icons/eye-slash.svg';
import FaceAngrySvg from 'assets/icons/face-angry.svg';
import FaceDizzySvg from 'assets/icons/face-dizzy.svg';
import FaceFlushedSvg from 'assets/icons/face-flushed.svg';
import FaceFrownSvg from 'assets/icons/face-frown.svg';
import FaceFrownOpenSvg from 'assets/icons/face-frown-open.svg';
import FaceGrinBeamSvg from 'assets/icons/face-grin-beam.svg';
import FaceGrinBeamSweatSvg from 'assets/icons/face-grin-beam-sweat.svg';
import FaceGrinHeartSvg from 'assets/icons/face-grin-hearts.svg';
import FaceGrinSquintSvg from 'assets/icons/face-grin-squint.svg';
import FaceGrinSquintTearsSvg from 'assets/icons/face-grin-squint-tears.svg';
import FaceGrinStartsSvg from 'assets/icons/face-grin-stars.svg';
import FaceGrinTearsSvg from 'assets/icons/face-grin-tears.svg';
import FaceGrinTongueSvg from 'assets/icons/face-grin-tongue.svg';
import FaceGrinTongueSquintSvg from 'assets/icons/face-grin-tongue-squint.svg';
import FaceGrinTongueWinkSvg from 'assets/icons/face-grin-tongue-wink.svg';
import FaceGrinWideSvg from 'assets/icons/face-grin-wide.svg';
import FaceGrinWinkSvg from 'assets/icons/face-grin-wink.svg';
import FaceKissSvg from 'assets/icons/face-kiss.svg';
import FaceKissBeamSvg from 'assets/icons/face-kiss-beam.svg';
import FaceKissWinkHeartSvg from 'assets/icons/face-kiss-wink-heart.svg';
import FaceLaughSvg from 'assets/icons/face-laugh.svg';
import FaceLaughBeamSvg from 'assets/icons/face-laugh-beam.svg';
import FaceLaughSquintSvg from 'assets/icons/face-laugh-squint.svg';
import FaceLaughWinkSvg from 'assets/icons/face-laugh-wink.svg';
import FaceMehSvg from 'assets/icons/face-meh.svg';
import FaceMehBlankSvg from 'assets/icons/face-meh-blank.svg';
import FaceRollingEyesSvg from 'assets/icons/face-rolling-eyes.svg';
import FaceSadCrySvg from 'assets/icons/face-sad-cry.svg';
import FaceSadTearSvg from 'assets/icons/face-sad-tear.svg';
import FaceSmileSvg from 'assets/icons/face-smile.svg';
import FaceSmileBeamSvg from 'assets/icons/face-smile-beam.svg';
import FaceSurpriseSvg from 'assets/icons/face-surprise.svg';
import FaceTiredSvg from 'assets/icons/face-tired.svg';
import FileSvg from 'assets/icons/file.svg';
import FileAudioSvg from 'assets/icons/file-audio.svg';
import FileCodeSvg from 'assets/icons/file-code.svg';
import FileExcelSvg from 'assets/icons/file-excel.svg';
import FileImageSvg from 'assets/icons/file-image.svg';
import FileLinesSvg from 'assets/icons/file-lines.svg';
import FilePdfSvg from 'assets/icons/file-pdf.svg';
import FilePowerpointSvg from 'assets/icons/file-powerpoint.svg';
import FileWordSvg from 'assets/icons/file-word.svg';
import FileZipperSvg from 'assets/icons/file-zipper.svg';
import FolderSvg from 'assets/icons/folder.svg';
import FolderClosedSvg from 'assets/icons/folder-closed.svg';
import FootballSvg from 'assets/icons/football.svg';
import GemSvg from 'assets/icons/gem.svg';
import HandSvg from 'assets/icons/hand.svg';
import HandBackFistSvg from 'assets/icons/hand-back-fist.svg';
import HandLizardSvg from 'assets/icons/hand-lizard.svg';
import HandPeaceSvg from 'assets/icons/hand-peace.svg';
import HandPointDownSvg from 'assets/icons/hand-point-down.svg';
import HandPointUpSvg from 'assets/icons/hand-point-up.svg';
import HandPointLeftSvg from 'assets/icons/hand-point-left.svg';
import HandPointRightSvg from 'assets/icons/hand-point-right.svg';
import HandPointerSvg from 'assets/icons/hand-pointer.svg';
import HandScissorsSvg from 'assets/icons/hand-scissors.svg';
import HandPockSvg from 'assets/icons/hand-spock.svg';
import HandShaeSvg from 'assets/icons/handshake.svg';
import HandDriveSvg from 'assets/icons/hard-drive.svg';
import HeartSvg from 'assets/icons/heart.svg';
import HospitalSvg from 'assets/icons/hospital.svg';
import HourGlassSvg from 'assets/icons/hourglass.svg';
import HourGlassHalfSvg from 'assets/icons/hourglass-half.svg';

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
  [`chess-queen`]: ChessQueenSvg,
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

export interface MKIconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof SVG_ICONS;
  className?: string;
}

export const MKIcon: FC<MKIconProps> = ({ name, className = '', ...props }) => {
  const Icon = SVG_ICONS[name];
  return (
    <span className={classNames('mk-svg-icon', className)}>
      <Icon {...props} />
    </span>
  );
};
